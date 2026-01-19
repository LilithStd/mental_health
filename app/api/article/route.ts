import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const dataDir = path.join(
  process.cwd(),
  'data',
  'articles'
)

const filePath = path.join(
  dataDir,
  'articles.json'
)

export async function POST(request: Request) {
  const formData = await request.formData()

  const title = formData.get('title')
  const content = formData.get('content')

  if (!title || !content) {
    return NextResponse.json(
      { error: 'Missing fields' },
      { status: 400 }
    )
  }

  // читаем текущий файл
  const fileData = fs.readFileSync(filePath, 'utf-8')
  const articles = JSON.parse(fileData)

  // новая статья
  const newArticle = {
    id: Date.now(),
    title,
    content,
    createdAt: new Date().toISOString(),
  }

  articles.push(newArticle)

  // записываем обратно
  fs.writeFileSync(
    filePath,
    JSON.stringify(articles, null, 2)
  )

  return NextResponse.json({
    success: true,
    article: newArticle,
  })
}
