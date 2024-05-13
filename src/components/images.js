"use client"
import { CldImage } from 'next-cloudinary';

export default function Cloud({ src, alt = "images" }) {
  // function clickPrevent(event) {
  //   if (event.button == 2) {
  //     return false
  //   }
  // }
  return (
    <CldImage
      width="100"
      height="100"
      className='h-auto w-auto'
      priority={true}
      src={src}
      alt={alt}
      // onMouseDown={clickPrevent}
      // quality="auto"
      // defaultImage="http://via.placeholder.com/640x360" 
      // crop="fill"
    />
  )
}