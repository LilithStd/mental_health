import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

type QuestionVariant = {
    id:string
    title:string
    count:number
}
type Question = {
    id:string
    variant: QuestionVariant[]
}

type Test = {
  id: number
  label: string
  title: {
    EN: string
    RU: string
    LV: string
  }
  content: string
  questions: Question[]
}

const dataDir = path.join(process.cwd(), 'data', 'tests')
const filePath = path.join(dataDir, 'tests.json')

function ensureFileExists() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8')
  }
}

export async function GET(req: Request) {
  ensureFileExists()

  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  const raw = fs.readFileSync(filePath, 'utf-8')
  const tests: Test[] = JSON.parse(raw)

  // 👉 Получение одной статьи
  if (id) {
    const test = tests.find(a => a.id === Number(id))

    if (!test) {
      return NextResponse.json(
        { error: 'Test not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ test: test })
  }

  // 👉 Получение всех статей
  return NextResponse.json({ tests: tests })
}