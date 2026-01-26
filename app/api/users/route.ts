import { NextResponse } from 'next/server'
import {
  readUsers,
  getUserById,
  createUser,
  updateUser
} from '@/app/serverActions/usersStorage'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (id) {
    const user = await getUserById(Number(id))
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }
    return NextResponse.json({ user })
  }

  const users = await readUsers()
  return NextResponse.json({ users })
}

export async function POST(req: Request) {
  const body = await req.json()
const { email, password } = body

  if (!email || !password) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const result = await createUser(email, password)

  if ('error' in result) {
    return NextResponse.json({ error: result.error }, { status: 409 })
  }

  return NextResponse.json({ success: true, user: result.user })
}

export async function PUT(req: Request) {
  const body = await req.json()
  const { id, ...rest } = body

  if (!id) {
    return NextResponse.json({ error: 'id required' }, { status: 400 })
  }

  const updated = await updateUser(Number(id), rest)

  if (!updated) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  return NextResponse.json({ success: true, user: updated })
}
