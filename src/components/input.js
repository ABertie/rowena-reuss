"use client"

import { useEffect } from "react"
import { toast } from "react-toastify"

export default function Input({ type, name, placeholder, status = null, className }) {

    useEffect(function () {
        if (status !== null) {
            status.map(m => toast.error(m))
        }
    }, [status])

    return (
        <label className={`text-sec-light ${className}
        *:bg-white *:py-2 *:px-4 *:text-sec-dark *:w-full h-full `}>
            {placeholder}:
            {type === "textarea"
                ? <textarea name={name}
                    className={`resize-none h-[calc(100%-2rem)] md:h-[calc(100%-1.5rem)]
                    ${status !== null ? "outline outline-2 outline-prim-dark" : ""}`}></textarea>
                : <input type={type} name={name} className={status !== null ? "outline outline-2 outline-prim-dark" : ""} />}
        </label>
    )
}