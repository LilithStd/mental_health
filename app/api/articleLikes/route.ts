import { NextResponse } from 'next/server'
import { toggleLike, getArticleLikes } from '@/app/serverActions/likesStorage'

export async function POST(req: Request) {
  const { articleId, userId } = await req.json()

  if (!articleId || !userId) {
    return NextResponse.json({ error: 'Missing data' }, { status: 400 })
  }

  const result = await toggleLike(Number(articleId), userId)

  return NextResponse.json(result)
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const articleId = searchParams.get('articleId')

  if (!articleId) {
    return NextResponse.json({ error: 'Missing articleId' }, { status: 400 })
  }

  const likes = await getArticleLikes(Number(articleId))

  return NextResponse.json({
    likesCount: likes.length,
    likes,
  })
}