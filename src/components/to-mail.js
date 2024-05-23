import Input from "./input";

export default function ToMail() {
    return (
        <form className="container bg-sec-dark my-32 py-16 grid gap-8 md:grid-cols-2">
            <Input type="text" name="name" placeholder="You name" className="md:col-start-1"/>
            <Input type="email" name="email" placeholder="You email" className="md:col-start-1"/>
            <Input type="textarea" name="message" placeholder="You message" className="md:col-start-2 md:row-start-1 md:row-span-3"/>
            <button type="submit" className="py-2 px-4 bg-prim-dark text-white md:col-start-1">Send</button>
        </form>
    )
}