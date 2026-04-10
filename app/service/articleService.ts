import { connectDB } from "../lib/connectDB";
import { Article, ArticleTypes } from "../models/article";

export async function getAllArticles() {
  await connectDB();
  return Article.find().lean();
}

export async function createArticle(data: Partial<ArticleTypes>) {
  await connectDB();
  return Article.create(data);
}

export async function likeArticle(id: string) {
  await connectDB();
  return Article.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { new: true });
}