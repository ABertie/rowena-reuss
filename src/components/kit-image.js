"use client"

import SignedKit from "@/actions/signed-kit";
import { IKContext, IKImage } from "imagekitio-react";

export default function KitImage({src}) {
    let imageURL = SignedKit(src)

    return(
        <IKContext 
            urlEndpoint="https://ik.imagekit.io/dbmmghwyv">

            <IKImage 
                path={imageURL}
                loading="lazy"
                lqip={{ active: true }} // smart lazyloding
                transformation={[{
                    n: "watermark"
                }]}
                />

        </IKContext>
    )
}