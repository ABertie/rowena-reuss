import GetKit from "@/actions/kit-list";
import Link from "next/link";
import KitImage from "./kit-image";

export default async function Folder({ folder }) {
    let images = await GetKit(folder.folderPath)

    return (
        <Link
            href={folder.folderPath}
            className="relative flex items-center justify-center bg-prim-dark overflow-hidden w-full h-full">
            {images[0]?.filePath && <KitImage src={images[0].filePath} />}
            <div className="absolute inset-0 bg-black/50"></div>
            <p className="text-white absolute">{folder.name}</p>
        </Link>
    )
}