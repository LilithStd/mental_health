import { NextResponse } from 'next/server'
import {
  addUserFavorite,
  removeUserFavorite
} from '@/app/serverActions/usersStorage'

export async function POST(req: Request) {
  const { userId, type, value } = await req.json()

  const updated = await addUserFavorite(userId, type, value)
  if (!updated) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  return NextResponse.json({ success: true, user: updated })
}

export async function DELETE(req: Request) {
  const { userId, type, value } = await req.json()

  const updated = await removeUserFavorite(userId, type, value)
  if (!updated) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  return NextResponse.json({ success: true, user: updated })
}
