"use client"

import { useEffect, useState } from "react"

export default function TestButton() {
    // var index = 0
    const [index, setIndex] = useState(0)

    // useEffect(function () {
    //     console.log(index);
    // }, [])

    // console.log(index);

    return(
        <div>
            du har clicket : {index} gange
            <button onClick={() => {
                // index = index + 1
                setIndex(index + 1)
                }}>click mig</button>
        </div>
    )
}