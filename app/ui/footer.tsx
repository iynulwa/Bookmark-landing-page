import Image from 'next/image'

export default function Footer() {
    return(
        <section>
            <div>
                <p>35,000+ ALREADY JOINED</p>
                <p>Stay up-to-date with what we're doing</p>
                {/* search box componenet */}
            </div>
            <div>
                <Image width={150} height={150} src="/logo-bookmark.svg" alt='' />
                <ul>
                    <li>FEATURES</li>
                    <li>PRICING</li>
                    <li>CONTACT</li>
                </ul>
                <div className='flex'>
                    <Image src="/icon-facebook.svg" alt='Go to facebook' width={50} height={50} />
                    <Image src="/icon-twitter.svg" alt='Go to twitter' width={50} height={50} />
                </div>
                
            </div>
        </section>
    )
}