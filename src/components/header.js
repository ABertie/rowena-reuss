"use client"

import { useState } from "react";

export default function Header({ children }) {
    const [close, setClose] = useState(true)

    return (
        <header>
            <button
                className="fixed right-0 top-0 p-3 px-6 z-50 bg-lightest rounded-bl-2xl md:hidden text-3xl"
                onClick={() => setClose(!close)}>
                {close ? "=" : "x"}
            </button>
            {<div className={`fixed inset-0 bottom-auto h-screen z-40 bg-lightest flex pt-12 p-8 md:p-4 md:pt-4 md:bg-light/30 md:h-auto ${close && "hidden md:flex"}`}>
                {children}
            </div>}
        </header >
    )
}