"use client"

import axios from "axios";
import { IKContext, IKImage } from "imagekitio-react";
import { useEffect, useState } from "react";

export default function KitImage({ src, className }) {
    const [imageURL, setImageURL] = useState(null)
    const [authenticator, setAuthenticator] = useState({})

    useEffect(function () {
        axios({
            method: "GET",
            url: process.env.NEXT_PUBLIC_HOST + "/api/signed-img",
            params: {
                src
            }
        })
            .then(function (response) {
                setImageURL(response.data.url)
            })

        axios({
            method: "GET",
            url: process.env.NEXT_PUBLIC_HOST + "/api/auth",
        })
            .then(function (response) {
                const { signature, expire, token } = response.data;
                setAuthenticator({ signature, expire, token })
            })

    }, [])

    return imageURL && (<IKContext
        urlEndpoint="https://ik.imagekit.io/dbmmghwyv"
        authenticator={authenticator}
    >

        <IKImage
            path={imageURL}
            loading="lazy"
            lqip={{ active: true }} // smart lazyloding
            transformation={[{
                n: "watermark"
            }]}
        />

    </IKContext>)

}