import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Socials({ data = [] }) {
    return (
        <>
            {data.map(item =>
                <Link
                    key={item.link.uid}
                    href={item.link.data.link.url}
                    target={item.link.data.link.target}
                    className="flex items-center justify-center"
                >
                    <FontAwesomeIcon icon={item.icon} />
                    {/* {item.link.data.name} */}
                </Link>
            )}
        </>
    )
}