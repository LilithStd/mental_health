
import { connectDB } from "../lib/connectDB";
import { Article, ArticleTypes } from "../models/article";
import { ArticleType } from "../types/types";
import { Types } from "mongoose";

function mapArticle(a: ArticleTypes): ArticleType {
  return {
    id: a._id.toString(), 
    multiLanguage: a.multiLanguage,
    title: a.title,
    description: a.description,
    content: a.content,
    author: a.author,
    hashTags: a.hashTags,
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
  console.log('Creating article with data:', data);
  return Article.create(data);
}

export async function getArticleById(id: string) {
  await connectDB();

  const article = await Article.findById(new Types.ObjectId(id)).lean();
    if(!article) return null;
        return {
            id: article._id.toString(),
            author: article.author,
            multiLanguage: article.multiLanguage,
            hashTags: article.hashTags,
            image: article.image,
            likes: article.likes,
            createdAt: article.createdAt.toISOString(),
            updatedAt: article.updatedAt?.toISOString(),
            title: article.title,
            content: article.content,
        };
}

export async function likeArticle(id: string) {
  await connectDB();
  return Article.findByIdAndUpdate(id, { $inc: { likes: 1 } }, { new: true });
}