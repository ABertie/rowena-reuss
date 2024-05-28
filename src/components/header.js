import Link from "next/link";

export default function Header() {
    return (
        <header className="p-4 flex flex-row-reverse gap-4 absolute inset-0 bottom-auto z-50 bg-prim-light/30">
            <Link href="/gallary">Gallary</Link>
            <a href="#contakt">Contakt</a>
            <a href="#aboutme">About Me</a>
            <a href="/">Home</a>
        </header>
    )
}