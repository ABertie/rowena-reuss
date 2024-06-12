import imagekit from "@/lib/image-kit";

export default async function GetKit(folder) {
    try {
        const response = await imagekit.listFiles({
            type: "all",
            path: folder,
            sort: "ASC_UPDATED"
        })
        return response
    } catch (error) {
        return error
    }
}