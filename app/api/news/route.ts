import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
const dataDir = path.join(process.cwd(), 'data', 'news')
const filePath = path.join(dataDir, 'news.json')

type NewsType = {
  id: number
  title: string
    content: string
    createdAt: string
    link: string
}

function ensureFileExists() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8')
  }
}

export async function GET(req: Request) {
  ensureFileExists()

  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  const raw = fs.readFileSync(filePath, 'utf-8')
  const news: NewsType[] = JSON.parse(raw)

  // 👉 Получение одной статьи
  if (id) {
    const newsItem = news.find(a => a.id === Number(id))

    if (!newsItem) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ newsItem })
  }

  // 👉 Получение всех статей
  return NextResponse.json({ news })
}