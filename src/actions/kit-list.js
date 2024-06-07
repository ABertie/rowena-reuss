import { stringify } from "postcss"

export default async  function GetList(folder) {
    try {
        const response = fetch("https://api.imagekit.io/v1/files", {
            method: "GET",
            body: stringify({
                type: "all",
                path: "/gallery/",
                fileType: "image",
            }),
            hearder: {
                "authorization": btoa()
            }
        })
    } catch (error) {
        return error   
    }
}