import Link from "next/link";
import { createClient } from "@/prismicio";
import BaseRichText from "./baseRichText";
import Socials from "./Socials";
import Nav from "./nav";

export default async function MainNav() {
    const client = createClient();
    const header = await client.getSingle("header", {
        fetchLinks: ["logo.logo", "navs.links", "socials.socials", "link.name", "link.link"]
    })

    return (
        <div className="flex gap-4 flex-col md:flex-row md:justify-between w-full">
            <BaseRichText field={header.data.logo.data.logo} />
            <div className="flex flex-col md:flex-row gap-4 justify-center md:items-center">
                <Nav data={header.data.nav.data.links} />
                <div className="flex gap-4 items-center">
                    <Socials data={header.data.socials.data.socials} />
                </div>
            </div>
        </div>
    )
}