'use server'

import { cookies } from 'next/headers'
import { getUserByEmail } from '../usersStorage'

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const user = await getUserByEmail(email)

  if (!user || user.password !== password) {
    return { error: 'Invalid email or password' }
  }

  // сохраняем сессию в cookie
  (await
    // сохраняем сессию в cookie
    cookies()).set('session', JSON.stringify({
    id: user.id,
    email: user.email,
    role: user.role,
  }), {
    httpOnly: true,
    path: '/',
  })

  return { success: true }
}



export async function getCurrentUser() {
  const session = (await cookies()).get('session')

  if (!session) return null

  try {
    return JSON.parse(session.value)
  } catch {
    return null
  }
}