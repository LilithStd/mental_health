import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { getAllNews } from '@/app/service/newsService'
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

export async function GET() {
  const news = await getAllNews();
  return NextResponse.json(news)
}

export async function POST(req: Request) {
  ensureFileExists()
  const { title, content, link } = await req.json()

  if (!title || !content) {
    return NextResponse.json(
      { error: 'Title and content are required' },
      { status: 400 }
    )
  }
  const raw = fs.readFileSync(filePath, 'utf-8')
  const news: NewsType[] = JSON.parse(raw)

  const newNewsItem: NewsType = {
    id: news.length > 0 ? news[news.length - 1].id + 1 : 1,
    title,
    content,
    createdAt: new Date().toISOString(),
    link: link || ''
  }

  news.push(newNewsItem)
  fs.writeFileSync(filePath, JSON.stringify(news, null, 2), 'utf-8')

  return NextResponse.json({ news: newNewsItem }, { status: 201 })
}