"use client"
import { CldImage } from 'next-cloudinary';

export default function Cloud({ src, className }) {
  // console.log(screen);
  return (
    <CldImage
      src={src.public_id}
      // width={src.width}
      // height={src.height}
      width="1090"
      height="1090"
      alt={`billed af ${src.filename}`}
      className={`h-auto w-auto ${className}`}
      // namedTransformations={['watermarked']} // ! images not working when yousing this
      priority={true}
      // loading="lazy"
      quality="35"
      fetchPriority='auto'
      crop="limit"
    />
  )
}