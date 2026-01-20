import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { Article } from '@/app/articles/page'


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

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  ensureFileExists()

  const raw = fs.readFileSync(filePath, 'utf-8')
  const articles: Article[] = JSON.parse(raw)
     console.log('SEARCH ID:', params.id)
    console.log('AVAILABLE IDS:', articles.map(a => a.id))
    const article = articles.find(
    (item) => String(item.id) === params.id
    )
    console.log('SEARCH ID:', params.id)
    console.log('AVAILABLE IDS:', articles.map(a => a.id))


  if (!article) {
    return NextResponse.json(
      { error: 'Article not found' },
      { status: 404 }
    )
  }

  return NextResponse.json({
    success: true,
    article,
  })
}
