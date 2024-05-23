"use client"
import { CldImage } from 'next-cloudinary';

export default function Cloud({ src, className }) {
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
  )
}