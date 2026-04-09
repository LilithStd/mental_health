import { connectDB } from "@/app/lib/connectDB";


export async function GET() {
  const conn = await connectDB();

  // 👇 получаем "сырой" доступ к базе
  const db = conn.connection.db;

  if (!db) {
    return Response.json({ error: "Database connection failed" }, { status: 500 });
  }

  // список коллекций
  const collections = await db.listCollections().toArray();

  console.log("Collections:", collections);

  return Response.json({ collections });
}