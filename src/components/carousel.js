"use client"

import { AnimatePresence, motion } from "framer-motion"
import Cloud from "./images"
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
            className={`flex absolute inset-0 items-center overflow-hidden justify-center`}>
            <div className="hidden">{count.push(i)}</div>
            <Cloud src={image} />
        </motion.div>)
    )

    useEffect(function () {
        setTimeoutRef(setInterval(() => {
            // setIndex(prevState => prevState === count.length - 1 ? 0 : prevState + 1)
            if (index === count.length - 1) setIndex(0)
            else setIndex(index + 1)
        }, 1000))
        // clearTimeout()
    }, [])

    // let TimeOut

    // if (loop === true) {
    //     TimeOut = setInterval(() => {
    //         if (index === count.length - 1) setIndex(0)
    //         else setIndex(index + 1)
    //     }, 5000);
    // }

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
                        // clearTimeout(timeoutRef)
                        clearInterval(timeoutRef)
                        setLoop(false)
                        setIndex(i)
                        // setTimeout(() => {setLoop(true)}, 10000)
                    }}
                        className={`${i !== index ? "bg-sec-light" : "bg-sec-dark"} w-3 h-3 rounded-full`}></button>
                )}
            </div>
        </section>
    )
}