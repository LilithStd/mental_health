import mongoose, { Schema, Document, Model } from "mongoose";

export interface NewsTypes extends Document {
    id: string,
    title: string,
    content: string,
    createdAt: Date,
    updatedAt?: Date
}

const NewsSchema: Schema<NewsTypes> = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const News: Model<NewsTypes> =
    mongoose.models.News || mongoose.model<NewsTypes>("News", NewsSchema);