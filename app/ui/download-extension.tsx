import data from '@/data/data.json';
import Card from './extension-card';

export default function ExtensionDownload () {
    return (
        <section className='extensions grid gap-4'>
            <h2 className='text-2xl font-bold text-center'>Download the extension</h2>
            <p className='text-center text-width'>
                We've got more browsers in the pipeline. Please
                do let us know if you've got a favourite  you'd like us
                to prioritize
            </p>
            <div className='*:mx-6 *:my-12'>
                {data.map((info) => (
                    <Card
                        key={info.id}
                        image={info.image}
                        title={info.title}
                        version={info.version}
                        install={info.install}
                    />
                ))}
            </div>
        </section>
    )
}