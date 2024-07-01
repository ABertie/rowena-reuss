"use client"

import KitImage from "./kit-image"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Carousel({ images }) {
    const [index, setIndex] = useState(0)
    const [loop, setLoop] = useState(true)
    const [timeoutRef, setTimeoutRef] = useState()

    let count = []
    let list = []

    images?.map((image, i) =>
        list.push(<motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                opacity: { duration: 1 }
            }}
            className={`flex absolute inset-0 items-center overflow-hidden justify-center `}>
            <div className="hidden">{count.push(i)}</div>
            <KitImage src={image.filePath}/>
        </motion.div>)
    )

    useEffect(() => {
        if(!timeoutRef) setTimeoutRef(setInterval(() => {
            setIndex((prevState) => prevState === count.length - 1 ? 0 : prevState + 1)
        }, 5000))
        clearTimeout()
    }, [loop])

    return (
        <section className="flex flex-col h-[35vh] xs:h-[60vh] lg:h-screen w-auto overflow-hidden">
            <div className="h-full w-full overflow-hidden relative">
                <AnimatePresence>
                    {list[index]}
                </AnimatePresence>
            </div>

            <div className="align-center justify-center gap-2 flex p-2 pb-9">
                {count?.map(i =>
                    <button key={i} onClick={() => {
                        clearInterval(timeoutRef)
                        setIndex(i)
                        setTimeout(() => {setLoop(!loop)}, 5000)
                    }}
                        className={`${i !== index ? "bg-sec-light" : "bg-sec-dark"} w-3 h-3 rounded-full`}></button>
                )}
            </div>
        </section>
    )
}