'use server'

import fs from 'fs/promises'
import path from 'path'

const likesDir = path.join(process.cwd(), 'data', 'articles', 'likes')

async function ensureDir() {
  await fs.mkdir(likesDir, { recursive: true })
}

function getFilePath(articleId: number) {
  return path.join(likesDir, `${articleId}.json`)
}

export async function getArticleLikes(articleId: number) {
  try {
    const file = await fs.readFile(getFilePath(articleId), 'utf-8')
    const likes: string[] = JSON.parse(file)

    return {
      likes,
      likesCount: likes.length,
    }
  } catch {
    return {
      likes: [],
      likesCount: 0,
    }
  }
}

export async function checkIfUserLiked(articleId: number, userId: number) {
  const { likes } = await getArticleLikes(articleId)
  return likes.includes(userId)
}

export async function toggleLike(
  articleId: number,
  userId: string
) {
  await ensureDir()
  const filePath = getFilePath(articleId)

  let likes: string[] = []

  try {
    const data = await fs.readFile(filePath, 'utf-8')
    likes = JSON.parse(data)
  } catch {}

  if (likes.includes(userId)) {
    likes = likes.filter(id => id !== userId)
  } else {
    likes.push(userId)
  }

  await fs.writeFile(filePath, JSON.stringify(likes, null, 2))

  return {
    likesCount: likes.length,
    isLiked: likes.includes(userId),
  }
}