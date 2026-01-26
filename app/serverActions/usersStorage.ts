// lib/articles-storage.ts
import fs from 'fs'
import path from 'path'
import { ROLE_AUTHORIZED_USER, ROLE_AUTH_USER_PRIVILEGE } from '../globalConsts/globalEnum'

type USER_FAVORITES = {
  ARTICLES:string[],
  TESTS:string[],
  NEWS:string[],

}

type User = {
  id: number
  email: string
  password: string
  role: ROLE_AUTHORIZED_USER
  privilege: ROLE_AUTH_USER_PRIVILEGE
  favorites: USER_FAVORITES
  updatedAt?: string
}

const dataDir = path.join(process.cwd(), 'data', 'users')
const filePath = path.join(dataDir, 'users.json')

function ensureFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8')
  }
}

export function getAllUsers(): User[] {
  ensureFile()
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

export function updateUser(
  id: number,
  data: Partial<Omit<User, 'id'>>
): User | null {
  ensureFile()

  const users = getAllUsers()
  const index = users.findIndex(a => a.id === id)

  if (index === -1) return null

  users[index] = {
    ...users[index],
    ...data,
    updatedAt: new Date().toISOString(),
  }

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2))
  return users[index]
}
