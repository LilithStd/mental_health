
import { saveUserTestResult } from '@/app/serverActions/saveUserTestResult'
import { NextResponse } from 'next/server'


export async function POST(req: Request) {
  const { testId, userId, resultCount } = await req.json()

  if (!testId || !userId) {
    return NextResponse.json({ error: 'Missing data' }, { status: 400 })
  }

  const result = await saveUserTestResult(Number(userId), testId, resultCount)

  return NextResponse.json(result)
}