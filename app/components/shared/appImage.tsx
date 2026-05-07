// components/AppImage.tsx
"use client"

import Image from "next/image"
import { IMAGES_UPLOAD_PATH } from "@/app/globalConsts/globalEnum"
import { getImagePath } from "@/app/lib/getImagePath"
import cloudinaryLoader from "@/app/lib/cloudinaryImageLoader"

interface AppImageProps {
  type: IMAGES_UPLOAD_PATH
  imageName: string
  entityId?: string

  width: number
  height: number
  alt?: string

  priority?: boolean
  className?: string
}

export default function AppImage({
  type,
  imageName,
  entityId,
  width,
  height,
  alt = "",
  priority = false,
  className,
}: AppImageProps) {

  const src = getImagePath(type, imageName, entityId)

  return (
    <Image
      loader={cloudinaryLoader}
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      unoptimized
    />
  )
}