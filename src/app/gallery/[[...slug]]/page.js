import Header from "@/components/header"
import Folder from "@/components/folder"
import Footer from "@/components/footer"

import KitImage from "@/components/kit-image"

import GetKit from "@/actions/kit-list"

export default async function Gallery({ params }) {
    let Slug = !params.slug
        ? "/gallery/"
        : "/gallery/" + params.slug.toString().replace(",", "/") + "/"

    let images = await GetKit(Slug)
    // console.log(images);

    return (
        <>
            <Header />
            <main className="container lg:px-[10%] pt-20 flex flex-wrap gap-2
            *:flex *:items-center *:justify-center *:overflow-hidden *:flex-auto *:min-h-24 *:max-h-[40vh]">
                {/* container lg:px-[10%] pt-20 *:max-h-96 *:min-h-36 grid grid-cols-[repeat(22,1fr)] grid-flow-row-dense grid-rows-[repeat(auto-fill,min-context] gap-2 */}
                {/* container lg:px-[10%] columns-[10rem] md:columns-3xs pt-20 *:min-h-20 gap-2 *:mb-2 *:last:mb-0 */}
                {images?.map(image => image.type !== "folder"
                    ? <div
                        key={image.fileId}
                        className={image.height < image.width ? "aspect-[3/2]" : "aspect-[2/3]"}>
                        <KitImage
                            src={image.filePath}
                        />
                    </div>
                    : <Folder
                        key={image.folderId}
                        folder={image}
                    />
                )}
            </main>
            <Footer />
        </>
    )
}