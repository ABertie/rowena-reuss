import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import BaseRichText from "./baseRichText";
import Socials from "./Socials";
import Nav from "./nav";

export default async function Footer() {
    const client = createClient();
    const footer = await client.getSingle("footer", {
        fetchLinks: ["logo.logo", "navs.links", "socials.socials", "link.name", "link.link"]
    })

    return (
        <footer className="grid gap-4 p-4">
            <SliceZone
                slices={footer.data.slices}
                components={{

                    logo_selector: (item) => <BaseRichText field={item.slice.primary.logo.data.logo} />,

                    nav: (item) => <section
                        className="flex flex-col col-start-3 gap-4 justify-center">
                        <Nav data={item.slice.primary.nav.data.links} />
                    </section>,

                    socials_selector: (item) => <section
                        className="flex col-start-3 gap-4 items-center">
                        <Socials data={item.slice.primary.socials.data.socials} />
                    </section>,

                }}
            />
        </footer>
    )
}