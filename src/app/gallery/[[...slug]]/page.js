import GetKit from "@/actions/kit-list"
import Header from "@/components/header"
import Folder from "@/components/folder"
import KitImage from "@/components/kit-image"

export default async function Gallery({ params }) {
    let Slug = !params.slug
        ? "/gallery/"
        : "/gallery/" + params.slug.toString().replace(",", "/") + "/"

    let images = await GetKit(Slug)
    // console.log(images);

    return (
        <>
            <Header />
            <main className="container lg:px-[10%] columns-[10rem] md:columns-3xs pt-20 *:min-h-20 gap-2 *:mb-2 *:last:mb-0">
                {images?.map(image => image.type !== "folder"
                    ? <KitImage
                        key={image.fileId}
                        src={image.filePath}
                    />
                    : <Folder
                        key={image.folderId}
                        folder={image}
                    />
                )}
            </main>
        </>
    )
}