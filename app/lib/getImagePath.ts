// lib/getImagePath.ts

import { IMAGES_UPLOAD_PATH } from "../globalConsts/globalEnum"


const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME

export function getImagePath(
  type: IMAGES_UPLOAD_PATH,
  imageName: string,
  entityId?: string
) {
  const base = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`

  if (type === IMAGES_UPLOAD_PATH.GLOBAL) {
    return `${base}/mental_health/global/bio/${imageName}`
  }

  return `${base}/mental_health/${type}/${entityId}/${imageName}`
}