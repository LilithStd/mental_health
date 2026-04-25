import { connectDB } from "../lib/connectDB";
import { Types } from "mongoose";
import { News, NewsTypes } from "../models/news";
import { NewsType } from "../types/types";

function mapNews(news: NewsTypes): NewsType {
    return {
        id: news._id.toString(),
        multiLanguage: news.multiLanguage,
        title: news.title,
        description: news.description,
        image: news.image,
        hashTags: news.hashTags,
        content: news.content,
        createdAt: news.createdAt.toISOString(),
        updatedAt: news.updatedAt?.toISOString()
    }
}

export async function getAllNews() {
    await connectDB();
    const news = await News.find().lean();
    return news.map(mapNews);
}

export async function getNewsById(id: string) {
    await connectDB();
    const news = await News.findById(new Types.ObjectId(id)).lean();
    if (!news) {
        throw new Error("News not found");
    }
    return {
        id: news._id.toString(),
        title: news.title,
        multiLanguage: news.multiLanguage,
        description: news.description,
        image: news.image,
        hashTags: news.hashTags,
        content: news.content,
        createdAt: news.createdAt.toISOString(),
        updatedAt: news.updatedAt?.toISOString()
    };
}