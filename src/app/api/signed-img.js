import { NextResponse } from "next/server";
import imagekit from "@/lib/image-kit";

export async function GET(request) {
    const params = request.nextUrl.searchParams

    const src = params.get("src")

    var imageURL = imagekit.url({
        path : src,
        queryParameters : {
            "v" : "123"
        },
        signed : true,
        // expireSeconds : 300
    })
    return NextResponse.json({
        url: imageURL
    })
}