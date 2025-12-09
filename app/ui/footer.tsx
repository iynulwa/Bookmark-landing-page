import Image from 'next/image'
import Search from './search'

export default function Footer() {
    return(
        <section className='w-full'>
            <div className='bg-blue-400 grid place-items-center py-20'>
                <p className='text-white font-normal tracking-widest'>35,000+ ALREADY JOINED</p>
                <p className='text-2xl text-center text-white font-medium'>Stay up-to-date with what we're doing</p>
                <Search />
            </div>
            <div className='grid place-items-center gap-6 bg-blue-900 py-10'>
                <Image className="filter brightness-0 invert" width={150} height={150} src="/logo-bookmark.svg" alt='' />
                <ul className='text-white text-center *:mb-4'>
                    <li>FEATURES</li>
                    <li>PRICING</li>
                    <li>CONTACT</li>
                </ul>
                <div className='flex gap-8'>
                    <Image src="/icon-facebook.svg" alt='Go to facebook' width={25} height={25} />
                    <Image src="/icon-twitter.svg" alt='Go to twitter' width={25} height={25} />
                </div>
            </div>
        </section>
    )
}