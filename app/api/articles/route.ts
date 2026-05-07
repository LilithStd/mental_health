// app/api/articles/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/connectDB";
import { Article } from "@/app/models/article";
import { ArticleType } from "@/app/types/types";

import { createArticle, getAllArticles } from "@/app/service/articleService";
import cloudinary from "@/app/lib/cloudinary";
import { buffer } from "stream/consumers";


// GET — возвращаем все статьи
export async function GET() {
  const articles = await getAllArticles();
  return Response.json(articles);
}

export async function POST(req: Request) {
  const formData = await req.formData();
  const image = formData.get("image") as File;

  console.log('Received form data:', formData);

  
  // 👉 обработка файла отдельно
  if (!image || image.size === 0) {
    return NextResponse.json({ error: "No file" }, { status: 400 })
  }
 
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

    // сохранить (локально / cloud)
  
  interface CloudinaryUploadResult {
    secure_url: string;
  }

  const uploadResult = await new Promise<CloudinaryUploadResult>((resolve, reject) => {

      cloudinary.uploader

        .upload_stream(

          { folder: "articles" },

          (error, result) => {

            if (error) reject(error)

            else resolve(result as CloudinaryUploadResult)

          }

        )

        .end(buffer)

  })
  const imageUrl = image ? uploadResult.secure_url : "";
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
    image: imageUrl,
    content: {
      en: (formData.get("contentEn") as string) || "",
      ru: (formData.get("contentRu") as string) || "",
      lv: (formData.get("contentLv") as string) || "",
    },
  };
  console.log('Parsed article data:', article);
  // await createArticle(article);

  return Response.json({ ok: true });
}