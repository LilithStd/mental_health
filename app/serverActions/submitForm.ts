// 'use server'

// import fs from 'fs/promises'
// import path from 'path'

// const filePath = path.join(process.cwd(), 'debug.json')

// type User = {
//   login: string
//   password: string
// }

// export async function submitForm(formData: FormData) {
//   const login = formData.get('login') as string
//   const password = formData.get('password') as string

//   if (!login || !password) {
//     return { error: 'Login and password are required' }
//   }

//   // 1. Читаем существующие данные
//   let users: User[] = []

//   try {
//     const file = await fs.readFile(filePath, 'utf-8')
//     users = JSON.parse(file)
//   } catch {
//     // если файла нет — это нормально
//     users = []
//   }

//   // 2. Проверяем существующую пару login + password
//   const isExists = users.some(
//     (user) => user.login === login && user.password === password
//   )

//   if (isExists) {
//     return { error: 'User already exists' }
//   }

//   // 3. Добавляем нового пользователя
//   users.push({ login, password })

//   await fs.writeFile(filePath, JSON.stringify(users, null, 2))

//   return { success: true }
// }
