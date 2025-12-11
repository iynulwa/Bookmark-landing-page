import Image from "next/image"

interface Props {
    openMenu: () => void;
}

export default function Menu({openMenu}: Props) {
    return(
        <section className="menu p-8 bg-[var(--clr-blue-950)]/95">
            <div className="flex items-center justify-between">
                <Image className="filter brightness-0 invert" src="/logo-bookmark.svg" alt="Company Logo" width={150} height={150} />
                <button onClick={openMenu} className={`menu-btn`}><span className="sr-only">Close</span></button>
            </div>
            <ul className="text-white p-12 flex items-center justify-center flex-col gap-2">
                <hr className="h-px w-full bg-[var(--clr-grey-50)]" />
                <li className="p-4">FEATURES</li>
                <hr className="h-px w-full bg-[var(--clr-grey-50)]" />
                <li className="p-4">PRICING</li>
                <hr className="h-px w-full bg-[var(--clr-grey-50)]" />
                <li className="p-4">CONTACT</li>
                <hr className="h-px w-full bg-[var(--clr-grey-50)]" />
                <li className="p-4">LOGIN</li>
            </ul>
            <div className="flex items-center justify-center gap-4 my-4">
                <Image src="/icon-facebook.svg" alt="Go to facebook page" width={25} height={25} />
                <Image src="/icon-twitter.svg" alt="Go to twitter page" width={25} height={25} />
            </div>
        </section>
    )
}