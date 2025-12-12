import Image from 'next/image'
import Search from './search'

export default function Footer() {
    return(
        <section className='footer w-full'>
            <div className='bg-[var(--clr-blue-600)] grid place-items-center gap-6 py-20'>
                <p className='text-white font-normal tracking-widest'>35,000+ ALREADY JOINED</p>
                <p className='text-2xl text-center text-white font-medium md:text-3xl md:w-4/12'>Stay up-to-date with what we're doing</p>
                <Search />
            </div>
            <div className='grid place-items-center gap-6 bg-[var(--clr-blue-950)] py-10 md:py-4 md:flex md:items-center md:justify-between md:px-24'>
                <div className='md:flex md:gap-12 md:items-center md:justify-center md:py-8'>
                    <Image className="py-6 filter brightness-0 invert" width={150} height={150} src="/logo-bookmark.svg" alt='' />
                    <ul className='text-white text-center *:mb-6 *:last:mb-0 md:flex md:gap-4 md:*:mb-0'>
                        <li>FEATURES</li>
                        <li>PRICING</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <div className='flex gap-8 md:py-8'>
                    <Image src="/icon-facebook.svg" alt='Go to facebook' width={25} height={25} />
                    <Image src="/icon-twitter.svg" alt='Go to twitter' width={25} height={25} />
                </div>
            </div>
        </section>
    )
}