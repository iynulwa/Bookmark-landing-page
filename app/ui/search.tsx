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
            setErrorState(true)
        } else {
            setErrorState(false)
        }
    }

    return(
        <div className="md:flex md:gap-6 md:w-1/2">
            <label htmlFor="email" className="sr-only">Email</label>
            <div>
                <input onChange={handleChange} className="bg-white w-full p-4 rounded-md text-black" id="email" type="email" value={input} name="email" placeholder="Enter your email address" required/>
                {errorState && <Image className="w-auto h-4" src='/icon-error.svg' alt="" width={25} height={12} />}
                {errorState && <p className="bg-[var(--clr-red-400)] rounded-md p-2 text-white">Whoops, make sure it is an email</p>}
            </div>
            <button onClick={handleSubmit} className="w-full bg-[var(--clr-red-400)] text-white p-4 my-2 rounded-md md:my-0 md:w-1/2">Contact Us</button>
        </div>
    )
}
