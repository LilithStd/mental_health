'use server'

import { cookies } from 'next/headers'
import { getUserByEmail } from '../usersStorage'
import { UserAuthType } from '@/app/types/types'

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
    privilege: user.privilege,
  }), {
    httpOnly: true,
    path: '/',
  })

  return { success: true }
}


export async function getCurrentUser(): Promise<UserAuthType | null> {
  const session = (await cookies()).get('session')

  if (!session) return null

  try {
    return JSON.parse(session.value) as UserAuthType
  } catch {
    return null
  }
}


export async function logoutAction() {
  (await cookies()).delete('session')
}