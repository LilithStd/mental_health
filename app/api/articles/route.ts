import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { updateArticle } from '@/app/serverActions/articleStorage'

type Article = {
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
  const articles: Article[] = JSON.parse(raw)

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

export async function PUT(req: Request) {
  const body = await req.json()

  const { id, title, content, image } = body

  if (!id) {
    return NextResponse.json(
      { error: 'id is required' },
      { status: 400 }
    )
  }

  // 🔐 тут может быть проверка прав
  // if (!isAdmin(req)) return 403

  const updated = updateArticle(Number(id), {
    title,
    content,
  })

  if (!updated) {
    return NextResponse.json(
      { error: 'Article not found' },
      { status: 404 }
    )
  }

  return NextResponse.json({
    success: true,
    article: updated,
  })
}