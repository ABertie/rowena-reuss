"use client"
import { CldImage } from 'next-cloudinary';

export default function Cloud({src, alt = "images"}) {
    return(
      <CldImage width="100" height="100" className='h-auto w-auto' src={src} alt={alt} />
    )
}