'use client';

import { useState } from "react";
import faqData from '@/data/faq.json';
import Image from "next/image";

export default function Faq() {

    const [activeQuestion, setActiveQuestion] = useState <number | null>(null);

    return (
        <section className="faq grid place-items-center gap-4">
            <h2 className='text-2xl font-bold text-center'>Frequently asked questions</h2>
            <p className='text-center w-8/12'>
                Here are some of our FAQs. If you have any
                other questions you'd like answered please feel
                free to email us.
            </p>
            <div>
                {faqData.map((data) => (
                    <div className="flex flex-col items-start" key={data.id}>
                        <button
                            onClick={() => setActiveQuestion(activeQuestion === data.id ? null : data.id)}
                            className="flex w-full items-center justify-between py-6 gap-10">
                            {data.question}
                            {activeQuestion === data.id ? <Image className="up-arrow" src="/icon-arrow.svg" width={15} height={15} alt="" /> : <Image src="/icon-arrow.svg" width={15} height={15} alt="" />}
                        </button>
                        {activeQuestion === data.id && 
                            <p className="text-width pt-4 pb-8">{data.answer}</p>
                        }
                        <hr className='h-px w-full bg-grey-100' />
                    </div> 
                ))}
            </div>
            <button className="my-10 py-4 px-6 rounded-lg bg-[var(--clr-blue-600)] text-white drop-shadow-md">More Info</button>
        </section>
    )
}