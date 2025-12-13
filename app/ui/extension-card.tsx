import Image from "next/image";

type CardProps = {
    image: string,
    title: string,
    version: string,
    install: string
}

export default function Card(props: CardProps) {
    return(
        <div className="grid place-items-center gap-3 py-6 rounded-lg card-shadow">
            <Image src={props.image} width={100} height={100} alt="" />
            <p className='text-xl font-medium text-center'>{props.title}</p>
            <p>{props.version}</p>
            <Image className="h-1 w-full" src="/bg-dots.svg" alt="" width={100} height={100} />
            <button className="add-extension-btn my-4 py-4 px-6 rounded-lg bg-[var(--clr-blue-600)] text-white md:w-8/12 lg:w-10/12 ">{props.install}</button>
        </div>
    )
}