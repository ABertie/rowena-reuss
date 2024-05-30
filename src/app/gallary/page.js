import GetList from "@/actions/img-list";
import Header from "@/components/header";
import Cloud from "@/components/images";
import Link from "next/link";

export default async function Gallary() {
    let images = await GetList("folder:RowenaReuss/gallary/*")
    let folders = []

    return (
        <>
            <Header />
            <main className="grid grid-cols-3">
                {images?.resources?.map(image => !image.folder.includes("RowenaReuss/gallary/") // er der nogle under mapper? ( gallary/ )
                    ? <Cloud key={image.asset_id} src={image} />
                    : !folders.includes(image.folder) && !image.folder.replace("RowenaReuss/gallary/", "").includes("/") // exsitere folderen i folders arrayet og er der nogle undermapper i?
                            ? <Link key={folders.push(image.folder)} href={`/${image.folder.replace("RowenaReuss/", "")}`} > {/* sætter mappen i array folders */}
                            <Cloud src={image} />
                        </Link>
                        : ""
                        )}
            </main> 
        </>
    )
}