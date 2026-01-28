import { NextResponse } from 'next/server'
import { readUsers } from '@/app/serverActions/usersStorage'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const users = await readUsers()

  const user = users.find(u => u.email === email)

  // ❗ Не говорим что именно неверно (email или пароль)
  if (!user || user.password !== password) {
    return NextResponse.json(
      { authorized: false },
      { status: 401 }
    )
  }

  return NextResponse.json({
    authorized: true,
    user, // потом тут будет JWT / cookie
  })
}
