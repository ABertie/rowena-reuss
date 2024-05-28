import GetList from "@/actions/img-list"
import Header from "@/components/header"
import Cloud from "@/components/images"

export default async function Folder({ params }) {
    let images = await GetList(`folder:RowenaReuss/${params.folder}/*`)
    // images.resources.map(img => console.log(img.folder))
    // console.log(images);

    return (
        <>
            <Header />
            <main>
                {images?.resources?.map(image => !image.folder.includes("/")
                    ? <Cloud key={image.asset_id} src={image} />
                    : !folders.includes(image.folder.replace("RowenaReuss/", ""))
                        ? <Link key={folders.push(image.folder.replace("RowenaReuss/", ""))} href={`/gallary/${image.folder.replace("RowenaReuss/", "")}`}>
                            <Cloud src={image} />
                        </Link>
                        : "")}
            </main>
        </>
    )
}