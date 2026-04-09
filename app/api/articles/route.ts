// app/api/articles/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/lib/connectDB";
import { Article } from "@/app/models/article";
import { ArticleType } from "@/app/types/types";

// GET — возвращаем все статьи
export async function GET() {
  try {
    await connectDB();

    const articles = await Article.find().sort({ createdAt: -1 });

    return NextResponse.json(articles);
  } catch (error) {
    console.error("GET /api/articles error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
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