import { v2 as cloudinary } from "cloudinary"

export default async function GetList(folder) {

    let images

    cloudinary.config({
        cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUD_KEY,
        api_secret: process.env.CLOUD_SECRET,
    })
    try {
        await cloudinary.search.expression(folder)
        .sort_by("public_id", "desc")
        .max_results(30)
        .execute()
        .then(result => images = result) 
    } catch (error) {
        return error
    }
    return images
}