import { NextResponse } from 'next/server'

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  console.log('🔥 TEST API', params.id)
  return NextResponse.json({ ok: true })
}