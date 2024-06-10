"use server"

import imagekit from "@/lib/image-kit";

export default async function SignedKit(src) {
    var imageURL = imagekit.url({
        path : src,
        queryParameters : {
            "v" : "123"
        },
        signed : true,
        // expireSeconds : 300
    })
    console.log(imageURL);
    return imageURL
}