import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'


type ConsultationFormSave = {
    name: string
    email: string
    subject: string
    phone: string
    date: string
    message: string
}

const dataDir = path.join(process.cwd(), 'data', 'articles')
const filePath = path.join(dataDir, 'articles.json')

function ensureFileExists() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]', 'utf-8')
  }
}

export async function POST(request: Request) {
    const reqBody: ConsultationFormSave = await request.json();
    console.log('Received consultation form data:', reqBody);

    // Here you can add logic to save the data to a database or send an email notification
    return NextResponse.json({ message: 'Consultation form submitted successfully' }, { status: 200 });
}