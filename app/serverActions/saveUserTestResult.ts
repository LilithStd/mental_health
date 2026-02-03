'use server'

import fs from 'fs/promises'
import path from 'path'
import { USER_FAVORITES } from './usersStorage'
import { ROLE_AUTH_USER_PRIVILEGE, ROLE_AUTHORIZED_USER } from '../globalConsts/globalEnum'

type TestResult = {
  date: string
  result: string
  score: number
}

  export type User = {
    id: number
    email: string
    password: string
    role: ROLE_AUTHORIZED_USER
    privilege: ROLE_AUTH_USER_PRIVILEGE
    favorites: USER_FAVORITES
  }

const usersPath = path.join(process.cwd(), 'data', 'users.json')

export async function saveUserTestResult(
    userId: number,
    testId: string,
    date: string,
    result: string
    ) {
    const file = await fs.readFile(usersPath, 'utf-8')
    const users = JSON.parse(file)

    const userIndex = users.findIndex((u: User) => u.id === userId)

    if (userIndex === -1) {
        return { success: false, error: 'User not found' }
    }

    // если вдруг нет favorites или SavedTestResult — создаём
    if (!users[userIndex].favorites) {
        users[userIndex].favorites = {}
    }

    if (!users[userIndex].favorites.SavedTestResult) {
        users[userIndex].favorites.SavedTestResult = []
    }

    users[userIndex].favorites.SavedTestResult.push({ testId, date, result })

    await fs.writeFile(usersPath, JSON.stringify(users, null, 2))

    return { success: true }
}