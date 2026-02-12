import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data', 'users')
const filePath = path.join(dataDir, 'auth_user.json')

function ensureFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8')
  }
}

export function setAuthUser(user: { id: number; name: string; privilege: string } | null) {
  ensureFile()
  fs.writeFileSync(filePath, JSON.stringify(user, null, 2), 'utf-8')
}

export function getAuthUser() {
  ensureFile()
  const content = fs.readFileSync(filePath, 'utf-8')
  return content ? JSON.parse(content) : null
}

export function clearAuthUser() {
  ensureFile()
  fs.writeFileSync(filePath, 'null', 'utf-8')
}
