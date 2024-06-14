"use client"

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [close, setClose] = useState(true)

    return (
        <header>
            <button
                className="fixed right-0 top-0 p-3 px-6 z-50 bg-white rounded-bl-2xl md:hidden text-3xl"
                onClick={() => setClose(!close)}>
                {close ? "=" : "x"}
            </button>
            {<div className={`fixed inset-0 bottom-auto h-screen z-40 bg-white flex flex-col pt-12 p-8 gap-4 md:p-4 md:pt-4 md:bg-prim-light/30 md:flex-row md:h-auto md:justify-end ${close && "hidden md:flex"}`}>
                <a href="/" onClick={() => setClose(!close)}>Home</a>
                <a href="#aboutme" onClick={() => setClose(!close)}>About Me</a>
                <a href="#contakt" onClick={() => setClose(!close)}>Contakt</a>
                <Link href="/gallery" onClick={() => setClose(!close)}>Gallery</Link>
            </div>}
        </header >
    )
}