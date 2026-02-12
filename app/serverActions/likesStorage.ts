'use server'

import fs from 'fs/promises'
import path from 'path'

const likesDir = path.join(process.cwd(), 'data','articles','likes')

async function ensureDir() {
  await fs.mkdir(likesDir, { recursive: true })
}

function getFilePath(articleId: number) {
  return path.join(likesDir, `${articleId}.json`)
}

// Получить лайки статьи
export async function getArticleLikes(articleId: number) {
  const file = await fs.readFile(likesDir, 'utf-8')
  const likes = JSON.parse(file)

  const articleLikes = likes[articleId] || {
    likes: [],
    likesCount: 0,
  }

  return articleLikes
}

// Проверить, лайкал ли пользователь
export async function isUserLiked(
  articleId: number,
  userId: string
): Promise<boolean> {
  const likes = await getArticleLikes(articleId)
  return likes.includes(userId)
}

// Переключить лайк (toggle)
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
  } catch {
    // файла нет — будет создан
  }

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