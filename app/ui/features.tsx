'use client'

import Image from 'next/image';
import { useState } from 'react';

export default function Features() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: number) => {
        setToggleState(index);
    }

    return (
        <section className='grid gap-4'>
            <h2 className='text-2xl font-bold text-center'>Features</h2>
            <p className='text-center text-width'>
                Our aim is to make it quick and easy for you to access your
                favourite websites. Your bookmarks sync between your devices
                so you can access them on  the go.
            </p>
            <div className='flex flex-col className="p-4"'>
                <hr className='h-px w-full bg-grey-100' />
                <button className="p-4" onClick={ () => toggleTab(1) }>Simple Bookmarking</button>
                <hr className='h-px w-full bg-grey-100' />
                <button className="p-4" onClick={ () => toggleTab(2) }>Speedy Searching</button>
                <hr className='h-px w-full bg-grey-100' />
                <button className="p-4" onClick={ () => toggleTab(3) }>Easy Sharing</button>
                <hr className='h-px w-full bg-grey-100' />
            </div>

            {/* Tab 1 */}
            <div className={`${toggleState === 1 ? 'active-content' : 'content'} place-items-center gap-2`}>
                <div className='relative p-10'>
                    <Image src="/illustration-features-tab-1.svg" alt='' width={300} height={300} />
                    <div className="bg-blue-500 w-11/12 h-3/4 rounded-r-full blue-backdrop-feature"></div>
                </div>
                <h3 className='text-2xl font-medium text-center'>Bookmark in one click</h3>
                <p className='text-center text-width'>
                    Organize your bookmarks however you like. Our simple
                    drag-and-drop interface gives you complete control over
                    how your manage your favourite sites.
                </p>
                <button className="py-4 px-6 rounded-lg bg-blue-600 text-white">More info</button>
            </div>

            {/* Tab 2 */}
            <div className={`spin ${toggleState === 2 ? 'active-content' : 'content'}`}>
                <div className='relative p-10'>
                    <Image src="/illustration-features-tab-2.svg" alt='' width={300} height={300} />
                    <div className="bg-blue-500 w-11/12 h-3/4 rounded-r-full blue-backdrop-feature"></div>
                </div>
                <h3 className='text-2xl font-medium text-center'>Intelligent search</h3>
                <p className='text-center text-width'>
                    Our powerful search feature will help you find saved sites
                    in no time at all. No need to trawl through all of your bookmarks.
                </p>
                <button className="py-4 px-6 rounded-xl bg-blue-600 text-white">More info</button>
            </div>

            {/* Tab 3 */}
            <div className={`spin ${toggleState === 3 ? 'active-content' : 'content'}`}>
                <div className='relative p-10'>
                    <Image src="/illustration-features-tab-3.svg" alt='' width={300} height={300} />
                    <div className="bg-blue-500 w-11/12 h-3/4 rounded-r-full blue-backdrop-feature"></div>
                </div>
                <h3 className='text-2xl font-medium text-center'>Share your bookmarks</h3>
                <p className='text-center text-width'>
                    Easily share your bookmarks and collections with others.
                    Create a sharable link that you can send at the click of a button.
                </p>
                <button className="py-4 px-6 rounded-lg bg-blue-600 text-white">More info</button>
            </div>
        </section>
    )
}