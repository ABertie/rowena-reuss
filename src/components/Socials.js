import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

export default function Socials({ data = [] }) {
    return (
        <>
            {data.map(item =>
                <Link key={item.link.uid} href={item.link.data.link.url} target={item.link.data.link.target}>
                    {/* <FontAwesomeIcon icon={fab.faInstagram}/>  */}
                    {/* {item.icon} */}
                    {item.link.data.name}
                </Link>
            )}
        </>
    )
}