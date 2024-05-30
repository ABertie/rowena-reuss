import GetList from "@/actions/img-list"
import Header from "@/components/header"
import Cloud from "@/components/images"
import Link from "next/link"

export default async function Folder({ params }) {
    let images = await GetList(`folder:RowenaReuss/${params.slug.toString().replace(",", "/")}/*`)
    let folders = []
    
    return (
        <>
            <Header />
            <main className="grid grid-cols-3">
                {images?.resources?.map(image => !image.folder.includes(`RowenaReuss/${params.slug.toString().replace(",", "/")}/`)
                    ? <Cloud key={image.asset_id} src={image} />
                    : !folders.includes(image.folder) && !image.folder.replace(`RowenaReuss/${params.slug.toString().replace(",", "/")}/`, "").includes("/")
                        ? <Link key={folders.push(image.folder)} href={`/${image.folder.replace(`RowenaReuss/`, "")}`}>
                            <Cloud src={image} />
                        </Link>
                        : "")
                        }
            </main>
        </>
    )
}