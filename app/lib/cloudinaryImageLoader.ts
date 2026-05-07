// lib/cloudinaryLoader.ts
interface CloudinaryLoaderProps {
  src: string
  width: number
  quality?: number | string
}

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: CloudinaryLoaderProps) {
  const q = quality || "auto"

  return src.replace(
    "/upload/",
    `/upload/f_auto,q_${q},w_${width}/`
  )
}