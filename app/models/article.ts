// models/Article.ts
import mongoose, { Schema, Document, Model } from "mongoose";
import { MultiLanguageText } from "../types/types";


export interface ArticleTypes extends Document {
  id:string;
  multiLanguage: boolean;
  title: MultiLanguageText | string;
  description?: MultiLanguageText | string;
  content: MultiLanguageText | string;
  author?: string;
  tags: string[];
  likes: number;
  createdAt: Date;
  updatedAt?: Date;
}

const ArticleSchema: Schema<ArticleTypes> = new Schema({
  multiLanguage: { type: Boolean, default: true },
  title: { en: String, ru: String, lv: String },
  author: { type: String },
  description: { en: String, ru: String, lv: String },
  content: { en: String, ru: String, lv: String },
  tags: [String],
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Article: Model<ArticleTypes> =
  mongoose.models.Article || mongoose.model<ArticleTypes>("Article", ArticleSchema);