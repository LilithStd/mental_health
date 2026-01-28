import { NextResponse } from 'next/server'
import { readUsers } from '@/app/serverActions/usersStorage'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const users = await readUsers()
  const user = users.find(u => u.email === email)

  if (!user || user.password !== password) {
    console.log('Unauthorized access attempt for email:', email);
    return NextResponse.json({ authorized: false })
  }

  return NextResponse.json({
    authorized: true,
    user
  })
}
