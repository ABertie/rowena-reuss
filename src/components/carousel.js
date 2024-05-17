"use client"

import GetList from "@/actions/img-list"
import { useEffect, useState } from "react"
import Cloud from "./images"

// import { useState } from "react"

export default function Carousel({images}) {
    // const [index, setIndex] = useState(0)
    return (
        <div className="h-screen pb-20 w-full">
            <div className="h-full w-full ">
                {images?.map((image, i) =>
                    <div key={i} className="flex items-center justify-center overflow-hidden w-screen h-full">
                        <Cloud src={image} />
                    </div>
                )}
            </div>
        </div>
    )
}