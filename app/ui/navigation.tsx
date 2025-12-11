'use client';

import Image from "next/image";
import Menu from "./menu";
import { useState } from "react";

export default function Navigation() {

    const [isOpen, setIsOpen] = useState(false);

    function openMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="flex items-center justify-between w-full p-8 gap-8">
            <Image src="/logo-bookmark.svg" alt="Company Logo" width={150} height={150} />
            <ul className="items-center gap-8 hidden md:flex">
                <li>FEATURES</li>
                <li>PRICING</li>
                <li>CONTACT</li>
                <li className="bg-[var(--clr-red-400)] py-3 px-8 rounded-lg text-white font-medium">LOGIN</li>
            </ul>
            <button onClick={openMenu} className={`nav-btn block md:hidden`}><span className="sr-only">Menu</span></button>

            {isOpen && <Menu openMenu={openMenu} />}
        </nav>
    )
}