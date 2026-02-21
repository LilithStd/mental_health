// lib/articles-storage.ts
import fs from 'fs'
import path from 'path'

type Article = {
  id: number
  title: string
  author: string
  content: string
  createdAt: string
  updatedAt?: string
}

const dataDir = path.join(process.cwd(), 'data', 'articles')
const filePath = path.join(dataDir, 'articles.json')

function ensureFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8')
  }
}

export function getAllArticles(): Article[] {
  ensureFile()
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'))
}

export function getArticlesByOptions(maxLength: number): Article[] {
  ensureFile()
  const articles = getAllArticles()
 function pickRandomUnique<T>(array: T[], count: number): T[] {
  if (count <= 0) return [];
  if (count >= array.length) return [...array];

  const result = [...array]; // копия
  const n = result.length;

  for (let i = 0; i < count; i++) {
    const randIndex = i + Math.floor(Math.random() * (n - i));

    // swap
    [result[i], result[randIndex]] = [result[randIndex], result[i]];
  }

  return result.slice(0, count);
}
  return pickRandomUnique(articles, maxLength)
}

export async function getArticleById(id: number) {
  console.log('getArticleById called with id:', id);
  ensureFile()
  const articles = await getAllArticles()
  return articles.find(a => a.id === id) || null
}

export function updateArticle(
  id: number,
  data: Partial<Omit<Article, 'id'>>
): Article | null {
  ensureFile()

  const articles = getAllArticles()
  const index = articles.findIndex(a => a.id === id)

  if (index === -1) return null

  articles[index] = {
    ...articles[index],
    ...data,
    updatedAt: new Date().toISOString(),
  }

  fs.writeFileSync(filePath, JSON.stringify(articles, null, 2))
  return articles[index]
}
