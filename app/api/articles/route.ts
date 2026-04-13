// app/api/articles/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/connectDB";
import { Article } from "@/app/models/article";
import { ArticleType } from "@/app/types/types";

import { createArticle, getAllArticles } from "@/app/service/articleService";

// GET — возвращаем все статьи
export async function GET() {
  const articles = await getAllArticles();
  return Response.json(articles);
}

// POST — создаём новую статью
// app/api/articles/route.ts


export async function POST(req: Request) {
  try {
    const body = await req.json();

    // базовая проверка
    if (!body.title || !body.content) {
      return Response.json({ message: "Missing fields" }, { status: 400 });
    }

    const article = await createArticle(body);

    return Response.json(article, { status: 201 });
  } catch (e) {
    console.error(e);
    return Response.json({ message: "Server error" }, { status: 500 });
  }
}