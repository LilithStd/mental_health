import mongoose, { Schema, Document, Model } from "mongoose";
import { MultiLanguageText } from "../types/types";
import { GROUP_TYPE_LIBRARY } from "../globalConsts/globalEnum";

export interface LibraryTypes extends Document {
    id: string,
    title: MultiLanguageText,
    type: GROUP_TYPE_LIBRARY,
    description?: MultiLanguageText,
    content: MultiLanguageText,
    hashTags: string[],
    image?: string,
    createdAt: Date,
    updatedAt?: Date
}

const LibrarySchema: Schema<LibraryTypes> = new Schema({
    title: { type: Object, required: true },
    type: { type: String, enum: Object.values(GROUP_TYPE_LIBRARY), required: true },
    description: { type: Object },
    content: { type: Object, required: true },
    hashTags: { type: [String], required: true },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const Library: Model<LibraryTypes> =
    mongoose.models.Library || mongoose.model<LibraryTypes>("Library", LibrarySchema);