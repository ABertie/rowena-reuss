"use client"

import { IKContext, IKImage } from "imagekitio-react";

export default function KitImage({src}) {
    return(
        <IKContext 
            urlEndpoint="https://ik.imagekit.io/dbmmghwyv">

            <IKImage 
                path={src}
                loading="lazy"
                lqip={{ active: true }} // smart lazyloding
                transformation={[{
                    n: "watermark"
                }]}
                />

        </IKContext>
    )
}