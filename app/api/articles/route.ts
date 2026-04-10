// app/api/articles/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/connectDB";
import { Article } from "@/app/models/article";
import { ArticleType } from "@/app/types/types";

// GET — возвращаем все статьи
export async function GET(): Promise<Response> {
  await connectDB();

  const articlesDB = await Article.find();

  const articles: ArticleType[] = articlesDB.map((article) => ({
    id: article._id.toString(),
    multiLanguage: article.multiLanguage,
    title: article.title,
    author: article.author || "",
    description: article.description || "",
    content: article.content,
    createdAt: article.createdAt.toISOString(),
  }));

  return Response.json(articles);
}

// POST — создаём новую статью
export async function POST(req: NextRequest) {
  try {
    await connectDB();

    // тело запроса
    const body = (await req.json()) as Omit<ArticleType, "id" | "createdAt">;

    // генерируем createdAt
    const createdAt = new Date();

    // создаём статью через Mongoose
    const article = await Article.create({
      ...body,
      createdAt,
    });

    return NextResponse.json(article, { status: 201 });
  } catch (error: unknown) {
    console.error("POST /api/articles error:", error);

    // duplicate slug
    if (error && typeof error === "object" && "code" in error && (error as { code: number }).code === 11000) {
      return NextResponse.json(
        { message: "Article with this slug already exists" },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}