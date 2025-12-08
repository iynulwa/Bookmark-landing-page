import data from '@/data/data.json';
import Card from './extension-card';

export default function ExtensionDownload () {
    return (
        <section>
            <h2>Download the extension</h2>
            <p>
                We've got more browsers in the pipeline. Please
                do let us know if you've got a favourite  you'd like us
                to prioritize
            </p>
            {data.map((info) => (
                <Card
                    key={info.id}
                    image={info.image}
                    title={info.title}
                    version={info.version}
                    install={info.install}
                />
            ))}
        </section>
    )
}