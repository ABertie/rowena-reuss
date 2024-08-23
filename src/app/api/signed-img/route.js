import { NextResponse } from "next/server";
import imagekit from "@/lib/image-kit";

export async function GET(request) {
    const params = request.nextUrl.searchParams

    const src = params.get("src")

    imagekit.getAuthenticationParameters()

    var imageURL = imagekit.url({
        path: src,
        transformation: [{
            named: "watermark"
        }],
        signed: true,
        expireSeconds: 300
    })
    return NextResponse.json({
        url: imageURL
    })
}