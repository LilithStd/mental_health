// models/Article.ts
import mongoose, { Schema, Document, Model } from "mongoose";
import { MultiLanguageText } from "../types/types";


export interface IArticle extends Document {
  multiLanguage: boolean;
  title: MultiLanguageText | string;
  description?: MultiLanguageText | string;
  content: MultiLanguageText | string;
  tags?: string[];
  likes?: number;
  createdAt: Date;
}

const ArticleSchema: Schema<IArticle> = new Schema({
  multiLanguage: { type: Boolean, default: true },
  title: { en: String, ru: String, lv: String },
  description: { en: String, ru: String, lv: String },
  content: { en: String, ru: String, lv: String },
  tags: [String],
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export const Article: Model<IArticle> =
  mongoose.models.Article || mongoose.model<IArticle>("Article", ArticleSchema);