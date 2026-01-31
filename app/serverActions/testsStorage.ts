import fs from 'fs'
import path from 'path'

type Test = {
  id: number
  title: string
  author: string
  content: string
  createdAt: string
  updatedAt?: string
}

const dataDir = path.join(process.cwd(), 'data', 'tests')
const filePath = path.join(dataDir, 'tests.json')

function ensureFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8')
  }
}

export function getAllTests(): Test[] {
  ensureFile()
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}