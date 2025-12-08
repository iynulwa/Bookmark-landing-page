import Image from "next/image";

type CardProps = {
    image: string,
    title: string,
    version: string,
    install: string
}

export default function Card(props: CardProps) {
    return(
        <div>
            <Image src={props.image} width={200} height={200} alt="" />
            <p>{props.title}</p>
            <p>{props.version}</p>
            <button>{props.install}</button>
        </div>
    )
}