import mongoose, { Schema, Document, Model } from "mongoose";
import { MultiLanguageText } from "../types/types";

export interface NewsTypes extends Document {
    id: string,
    multiLanguage: boolean,
    title: MultiLanguageText,
    description?: MultiLanguageText,
    content: MultiLanguageText,
    tags: string[],
    image?: string,
    createdAt: Date,
    updatedAt?: Date
}

const NewsSchema: Schema<NewsTypes> = new Schema({
    multiLanguage: { type: Boolean, required: true },
    title: { type: Object, required: true },
    description: { type: Object },
    content: { type: Object, required: true },
    tags: { type: [String], required: true },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const News: Model<NewsTypes> =
    mongoose.models.News || mongoose.model<NewsTypes>("News", NewsSchema);