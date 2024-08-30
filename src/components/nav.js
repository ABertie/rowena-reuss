import Link from "next/link";

export default function Nav({ data }) {
    return (
        <>
            {data.map(item => <Link key={item.link.data.name} href={item.link.data.link.url}>{item.link.data.name}</Link>)}
        </>
    )
}