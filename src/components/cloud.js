"use client"
import { CldImage } from 'next-cloudinary';

export default function Cloud({ src, className }) {
  // console.log(src);
  return (
    <CldImage
      src={src.public_id}
      width={src.width}
      height={src.height}
      // width="1090"
      // height="1090"
      alt={`billede af ${src.filename}`}
      className={`h-auto w-auto ${className}`}
      namedTransformations={['watermarked']}
      priority={true} // same as lazy
      quality="35"
      fetchPriority='auto'
      crop="limit"
    />
  )
}