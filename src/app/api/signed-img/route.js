import { NextResponse } from "next/server";
import imagekit from "@/lib/image-kit";

export async function GET(request) {
    const params = request.nextUrl.searchParams

    const src = params.get("src")

    imagekit.getAuthenticationParameters()

    var imageURL = imagekit.url({
        path : src,
        // queryParameters : {
        //     "v" : "123"
        // },
        // transformation : [{
        //     "height" : "300",
        //     "width" : "400"
        // }],
        signed : true,
        expireSeconds : 300
    })
    return NextResponse.json({
        url: imageURL.replace("https://ik.imagekit.io/dbmmghwyv", "")
    })
}