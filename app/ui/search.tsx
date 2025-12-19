'use client'

import { useState } from "react";
import Image from "next/image";

export default function Search() {

    const [input, setInput] = useState('');
    const [errorState, setErrorState] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    const validate = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (input.trim() === '' || !validate(input)) {
            setErrorState(true);
        } else {
            setErrorState(false);
            setInput('');
        }
    }

    return(
        <div className="w-9/12 md:flex md:gap-6 md:w-7/12">
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="relative w-full">
                <input onChange={handleChange} className={`bg-white w-full p-4 rounded-t-md text-black ${errorState && 'error-state'}`} id="email" type="email" value={input} name="email" placeholder="Enter your email address" required/>
                {errorState && <Image className="w-auto h-6 absolute top-4 right-4" src='/icon-error.svg' alt="" width={25} height={12} />}
                {errorState && <p className="bg-[var(--clr-red-400)] rounded-b-md p-2 text-white">Whoops, make sure it is an email</p>}
            </div>
            <button onClick={handleSubmit} className="contact-us w-full bg-[var(--clr-red-400)] text-white p-4 my-2 rounded-md md:my-0 md:w-4/12 h-12">Contact Us</button>
        </div>
    )
}
