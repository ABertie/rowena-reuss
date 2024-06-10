import GetKit from "@/actions/kit-list"
import Header from "@/components/header"
import KitImage from "@/components/kit-image"
import Link from "next/link"

export default async function Folder({ params }) {
    let Slug = !params.slug
        ? "/gallery/"
        : "/gallery/" + params.slug.toString().replace(",", "/") + "/"

    let images = await GetKit(Slug)
    console.log(Slug);

    return (
        <>
            <Header />
            <main className="grid grid-cols-3">
                {console.log(images)}
                {images?.map(image => image.type !== "folder"
                    ? <KitImage key={image.fileId} src={image.filePath} />
                    : <Link key={image.folderId} href={image.folderPath}>
                        {image.name}
                        {/* <KitImage src={image.filePath} /> */}
                    </Link>
                )}
            </main>
        </>
    )
}