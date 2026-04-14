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
  const formData = await req.formData();

  const image = formData.get("image") as File;
  console.log('Received form data:', formData);
  const article = {
    multiLanguage: true,
    author: {
      en: (formData.get("authorEn") as string) || "",
      ru: (formData.get("authorRu") as string) || "",
      lv: (formData.get("authorLv") as string) || "",
    },
    tags: (formData.get("tags") as string)?.split(",") || [],
    title: {
      en: (formData.get("titleEn") as string) || "",
      ru: (formData.get("titleRu") as string) || "",
      lv: (formData.get("titleLv") as string) || "",
    },
    content: {
      en: (formData.get("contentEn") as string) || "",
      ru: (formData.get("contentRu") as string) || "",
      lv: (formData.get("contentLv") as string) || "",
    },
  };
  console.log('Parsed article data:', article);
  // 👉 обработка файла отдельно
  if (image && image.size > 0) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // сохранить (локально / cloud)
  }

  // await createArticle(article);

  return Response.json({ ok: true });
}