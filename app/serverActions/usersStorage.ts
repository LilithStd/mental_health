import fs from 'fs/promises'
import path from 'path'
import { ROLE_AUTHORIZED_USER, ROLE_AUTH_USER_PRIVILEGE } from '@/app/globalConsts/globalEnum'

  export type USER_FAVORITES = {
    SavedTestResult: string[]
  }

  export type User = {
    id: number
    email: string
    password: string
    role: ROLE_AUTHORIZED_USER
    privilege: ROLE_AUTH_USER_PRIVILEGE
    favorites: USER_FAVORITES
  }

const dataDir = path.join(process.cwd(), 'data', 'users')
const filePath = path.join(dataDir, 'users.json')

async function ensureFile() {
  await fs.mkdir(dataDir, { recursive: true })
  try {
    await fs.access(filePath)
  } catch {
    await fs.writeFile(filePath, '[]', 'utf-8')
  }
}

export async function readUsers(): Promise<User[]> {
  await ensureFile()
  const raw = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(raw)
}

export async function writeUsers(users: User[]) {
  await fs.writeFile(filePath, JSON.stringify(users, null, 2))
}

export async function getUserById(id: number) {
  const users = await readUsers()
  return users.find(u => u.id === id) || null
}

export async function getUserByEmail(email: string) {
  const users = await readUsers()
  return users.find(u => u.email === email) || null
}

export async function createUser(email: string, password: string) {
  const users = await readUsers()

  if (users.some(u => u.email === email)) {
    return { error: 'User already exists' }
  }

  const newUser: User = {
    id: Date.now(),
    email,
    password,
    role: ROLE_AUTHORIZED_USER.USER,
    privilege: ROLE_AUTH_USER_PRIVILEGE.READ_ONLY,
    favorites: { SavedTestResult: [] }
  }

  users.push(newUser)
  await writeUsers(users)

  return { user: newUser }
}

export async function updateUser(id: number, data: Partial<User>) {
  const users = await readUsers()
  const index = users.findIndex(u => u.id === id)
  if (index === -1) return null

  users[index] = { ...users[index], ...data }
  await writeUsers(users)

  return users[index]
}
export async function addUserFavorite(
  userId: number,
  type: keyof USER_FAVORITES,
  value: string
) {
  const users = await readUsers()
  const user = users.find(u => u.id === userId)
  if (!user) return null

  if (!user.favorites[type].includes(value)) {
    user.favorites[type].push(value)
    await writeUsers(users)
  }

  return user
}

// export async function saveUserTestResult(
//   userId: number,
//   testId: string,
//   result: string
// ) {
//   const users = await readUsers()
//   const user = users.find(u => u.id === userId)
//   if (!user) return null
//   const record = `${testId}:${result}`
//   if (!user.favorites.SavedTestResult.includes(record)) {
//     user.favorites.SavedTestResult.push(record)
//     await writeUsers(users)
//   }
//   return user
// }

export async function removeUserFavorite(
  userId: number,
  type: keyof USER_FAVORITES,
  value: string
) {
  const users = await readUsers()
  const user = users.find(u => u.id === userId)
  if (!user) return null

  user.favorites[type] = user.favorites[type].filter(v => v !== value)
  await writeUsers(users)

  return user
}

