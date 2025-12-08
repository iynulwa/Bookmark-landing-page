import Image from 'next/image';

export default function Features() {
    return (
        <section>
            <h2>Features</h2>
            <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices
            so you can access them on  the go.
            </p>
            <ul>
                <li>Simple Bookmarking</li>
                <li>Speedy Searching</li>
                <li>Easy Sharing</li>
            </ul>
            <Image src="/illustration-hero.svg" alt='' width={300} height={300} />
        </section>
    )
}