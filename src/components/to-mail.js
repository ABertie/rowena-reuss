"use client"

import Input from "./input";
import { useFormState } from "react-dom";
import { sendMail } from "@/actions/mail"
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function ToMail() {
    const [formState, formAction] = useFormState(sendMail, null);

    useEffect(function () {
        if (formState?.success) {
            toast.success("Mail belv sendt")
        }
    }, [formState])

    return (
        <form action={formAction}
            className="container bg-sec-dark my-32 py-16 grid gap-8 md:grid-cols-2">
            <Input
                type="text"
                name="name"
                placeholder="You name"
                className="md:col-start-1"
                status={formState?.errors?.name ? formState?.errors?.name : null}
            />
            <Input
                type="text"
                name="email"
                placeholder="You email"
                className="md:col-start-1"
                status={formState?.errors?.email ? formState?.errors?.email : null}
            />
            <Input
                type="textarea"
                name="message"
                placeholder="You message"
                className="md:col-start-2 md:row-start-1 md:row-span-3"
                status={formState?.errors?.message ? formState?.errors?.message : null}
            />
            <button
                type="submit"
                className="py-2 px-4 bg-prim-dark text-white md:col-start-1">
                Send
            </button>
        </form>
    )
}