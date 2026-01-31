'use server'

import fs from 'fs/promises'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data', 'consultations')
const filePath = path.join(dataDir, 'requests.json')

async function ensureFile() {
  await fs.mkdir(dataDir, { recursive: true })

  try {
    await fs.access(filePath)
  } catch {
    await fs.writeFile(filePath, '[]', 'utf-8')
  }
}

type ConsultationRequest = {
  id: number
  name: string
    email: string
    subject: string
    phone: string
    date: string
    message: string
  createdAt: string
}

export async function saveConsultation(formData: FormData) {
  await ensureFile()

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const phone = formData.get('phone') as string
  const date = formData.get('date') as string
  const message = formData.get('message') as string

  if (!name || !email || !subject || !phone || !date || !message) {
    throw new Error('Missing fields')
  }

  const raw = await fs.readFile(filePath, 'utf-8')
  const requests: ConsultationRequest[] = JSON.parse(raw)

  const newRequest: ConsultationRequest = {
    id: Date.now(),
    name,
    email,
    subject,
    phone,
    date,
    message,
    createdAt: new Date().toISOString(),
  }

  requests.push(newRequest)

  await fs.writeFile(filePath, JSON.stringify(requests, null, 2))

  return { success: true }
}
