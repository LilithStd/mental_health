import { connectDB } from "../lib/connectDB";
import { Article, ArticleTypes } from "../models/article";
import { ArticleType } from "../types/types";

function mapArticle(a: ArticleTypes): ArticleType {
  return {
    id: a.id, 
    multiLanguage: a.multiLanguage,
    title: a.title,
    description: a.description,
    content: a.content,
    author: a.author,
    tags: a.tags,
    image: a.image,
    likes: a.likes,
    createdAt: a.createdAt.toISOString(),       
    updatedAt: a.updatedAt?.toISOString(),
  };
}

export async function getAllArticles() {
    await connectDB();
    const articles = await Article.find().lean();
    return articles.map(mapArticle);
}

export async function createArticle(data: Partial<ArticleTypes>) {
  await connectDB();
  return Article.create(data);
}

export async function likeArticle(id: string) {
  await connectDB();
  return Article.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { new: true });
}