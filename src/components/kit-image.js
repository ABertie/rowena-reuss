"use client"

import axios from "axios";
import { IKContext, IKImage } from "imagekitio-react";
import { useEffect, useState } from "react";

export default function KitImage({ src }) {
    const [imageURL, setImageURL] = useState(null)

    async function authenticator() {
        const response = await axios("/api/ik/auth")
        const data = await response.json()
        return data
    }

    useEffect(function () {
        axios({
            url: "/api/signed-img",
            params: {
                src
            }
        })
            .then(function (response) {
                setImageURL(response.data.url);
            })
    }, [])

    return imageURL && (
        <IKContext
            urlEndpoint="https://ik.imagekit.io/dbmmghwyv"
            authenticator={authenticator}
        >

            <IKImage
                src={imageURL}
            // loading="lazy"
            // lqip={{ active: true }} // smart lazyloding
            // transformation={[{
            //     n: "watermark"
            // }]}
            />

        </IKContext>
    )
}