"use client"

import Cloud from "./images"
import { useState } from "react"

export default function Carousel({ images }) {
    const [index, setIndex] = useState(0)

    let count = []
    let list = []
    
    images?.map((image, i) =>
        list.push(<li key={i} className={`flex items-center justify-center overflow-hidden w-full h-full transition-all`}>
            <div className="hidden">{count.push(i)}</div>
            <Cloud src={image} />
        </li>)
    )

    setTimeout(() => {
        if (index === count.length - 1) setIndex(0)
        else setIndex(index + 1)
    }, 5000);

    return (
        <div className="flex flex-col pb-12 h-screen w-full">
            <ul className="flex-row h-full w-full overflow-hidden">
                {list[index]}
            </ul>
            <ul className="align-center justify-center gap-2 flex p-2">
                {count?.map(i =>
                    <li key={i} className={`${i !== index ? "bg-secon-light" : "bg-secon-dark"} w-3 h-3 rounded-full`}></li>
                )}
            </ul>
        </div>
    )
}