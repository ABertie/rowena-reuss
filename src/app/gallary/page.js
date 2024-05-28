import GetList from "@/actions/img-list";
import Header from "@/components/header";
import Cloud from "@/components/images";
import Link from "next/link";

export default async function Gallary() {
    let images = await GetList("folder:RowenaReuss/*")
    let folders = []

    function shuffle(array) {
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
    }

    shuffle(images.resources);
    //   console.log(images.resources);

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