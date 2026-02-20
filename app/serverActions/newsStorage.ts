
import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data', 'news')
const filePath = path.join(dataDir, 'news.json')

type NewsType = {
  id: number
  title: string
    content: string
    createdAt: string
    link: string
}

function ensureFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8')
  }
}

export function getAllNews(): NewsType[] {
  ensureFile()
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}