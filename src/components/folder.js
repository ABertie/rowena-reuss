import GetKit from "@/actions/kit-list";
import Link from "next/link";
import KitImage from "./kit-image";

export default async function Folder({ folder }) {
    let images = await GetKit(folder.folderPath)

    return (
        <Link
            href={folder.folderPath}
            className={`relative bg-prim-dark first:*:h-full ${images[0].height < images[0].width ? "aspect-[3/2]" : "aspect-[2/3]"}`}>
            {images[0]?.filePath && <KitImage src={images[0].filePath} />}
            <div className="absolute inset-0 bg-black/50"></div>
            <p className="text-white absolute">{folder.name}</p>
        </Link>
    )
}