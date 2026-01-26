import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

import { ROLE_AUTHORIZED_USER, ROLE_AUTH_USER_PRIVILEGE } from '@/app/globalConsts/globalEnum'
import { updateUser } from '@/app/serverActions/usersStorage'

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
}

const dataDir = path.join(process.cwd(), 'data', 'users')
const filePath = path.join(dataDir, 'users.json')

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
  const users: User[] = JSON.parse(raw)

  // 👉 Получение одного пользователя
  if (id) {
    const user = users.find(a => a.id === Number(id))
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ user })
  }

  // 👉 Получение всех пользователей
  return NextResponse.json({ users })
}

export async function POST(request: Request) {
  const formData = await request.formData()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const role = (formData.get('role') as ROLE_AUTHORIZED_USER) || ROLE_AUTHORIZED_USER.USER
  const privilege = (formData.get('privilege') as ROLE_AUTH_USER_PRIVILEGE) || ROLE_AUTH_USER_PRIVILEGE.READ_ONLY
  const favorites: USER_FAVORITES = {
    ARTICLES: [],
    TESTS: [],
    NEWS: []
  }

  if (!email || !password) {
    return NextResponse.json(
      { error: 'Missing fields' },
      { status: 400 }
    )
  }

  // читаем текущий файл
  const fileData = fs.readFileSync(filePath, 'utf-8')
  const users = JSON.parse(fileData)

  // новая статья
  const newUser = {
    id: Date.now(),
    email,
    password,
    role,
    privilege,
    favorites,
  }

  users.push(newUser)

  // записываем обратно
  fs.writeFileSync(
    filePath,
    JSON.stringify(users, null, 2)
  )

  return NextResponse.json({
    success: true,
    user: newUser,
  })
}

export async function PUT(req: Request) {
  console.log('PUT /api/users called');
  ensureFileExists()
  const body = await req.json()

  const { id, email, password, role, privilege, favorites } = body
  if (!id) {
    return NextResponse.json(
      { error: 'id is required' },
      { status: 400 }
    )
  }

  // 🔐 тут может быть проверка прав
  // if (!isAdmin(req)) return 403

  const updated = updateUser(Number(id), {
    email,
    password,
    role,
    privilege,
    favorites,
  })

  if (!updated) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    )
  }

  return NextResponse.json({
    success: true,
    user: updated,
  })
}