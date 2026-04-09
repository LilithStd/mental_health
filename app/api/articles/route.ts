
import { connectDB } from "@/app/lib/connectDB";
import { Article } from "../../models/article";


export async function GET() {
  await connectDB();

  // создать запись
  await Article.create({
    title: "Привет",
    content: "Тестовая статья",
  });

  // получить все
  const articles = await Article.find();

  return Response.json(articles);
}