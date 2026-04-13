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

  const article = {
    multiLanguage: true,
    author: (formData.get("author") as string) || "Unknown",
    tags: (formData.get("tags") as string)?.split(",") || [],
    title: {
      en: (formData.get("title_en") as string) || "",
      ru: (formData.get("title_ru") as string) || "",
      lv: (formData.get("title_lv") as string) || "",
    },

    content: {
      en: (formData.get("content_en") as string) || "",
      ru: (formData.get("content_ru") as string) || "",
      lv: (formData.get("content_lv") as string) || "",
    },
  };

  // 👉 обработка файла отдельно
  if (image && image.size > 0) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // сохранить (локально / cloud)
  }

  await createArticle(article);

  return Response.json({ ok: true });
}