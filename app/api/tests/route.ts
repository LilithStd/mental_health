import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'


type Test = {
  id: number
  title: string
  content: string
}

const dataDir = path.join(process.cwd(), 'data', 'articles')
const filePath = path.join(dataDir, 'articles.json')

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
  const articles: Test[] = JSON.parse(raw)

  // 👉 Получение одной статьи
  if (id) {
    const article = articles.find(a => a.id === Number(id))

    if (!article) {
      return NextResponse.json(
        { error: 'Article not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ article })
  }

  // 👉 Получение всех статей
  return NextResponse.json({ articles })
}