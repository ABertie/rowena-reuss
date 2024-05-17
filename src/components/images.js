"use client"
import { CldImage } from 'next-cloudinary';

export default function Cloud({ src, className }) {
  // function clickPrevent(event) {
  //   if (event.button == 2) {
  //     return false
  //   }
  // }
  return (
    <CldImage 
      src={src.public_id} 
      width={src.width} 
      height={src.height} 
      alt={src.filename} 
      className={`h-auto w-auto ${className}`}
      namedTransformations={['watermarked']}
      priority={true}
      />
      
      // className='h-auto w-auto'
    // <CldImage
    //   width="100"
    //   height="100"
    //   priority={true}
    //   src={src}
    //   alt={alt}
    // onMouseDown={clickPrevent}
      // quality="auto"
      // defaultImage="http://via.placeholder.com/640x360" 
      // crop="fill"
    // />
  )
}