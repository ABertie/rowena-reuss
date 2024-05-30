import GetList from "@/actions/img-list"
import Header from "@/components/header"
import Cloud from "@/components/images"
import Link from "next/link"

export default async function Folder({ params }) {
    let Slug = !params.slug
        ? "RowenaReuss/gallary/"
        : "RowenaReuss/gallary/" + params.slug.toString().replace(",", "/") + "/"
    let images = await GetList(`folder:${Slug}*`)
    let subFolders = []

    return (
        <>
            <Header />
            <main className="grid grid-cols-3">
                {images?.resources?.map(image => !image.folder.includes(Slug)
                    ? <Cloud key={image.asset_id} src={image} />
                    : !subFolders.includes(image.folder)
                        && !image.folder.replace(Slug, "").includes("/")
                        && <Link key={subFolders.push(image.folder)} href={`/${image.folder.replace(`RowenaReuss/`, "")}`}>
                            <Cloud src={image} />
                        </Link>
                        )
                }
            </main>
        </>
    )
}