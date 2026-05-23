import mongoose, { Schema, Model, Document } from "mongoose";
import { DISORDER_TYPE } from "../globalConsts/globalEnum";
import { MultiLanguageText } from "../types/types";

export interface HashTagTypes extends Document {
    id: string,
    type: DISORDER_TYPE,
    title: MultiLanguageText,
    color: string,
    createdAt: Date,
    updatedAt?: Date
}

const HashTagSchema: Schema<HashTagTypes> = new Schema({
    type: { type: String, enum: Object.values(DISORDER_TYPE), required: true },
    title: { type: Object, required: true },
    color: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const HashTag: Model<HashTagTypes> =
    mongoose.models.HashTag || mongoose.model<HashTagTypes>("HashTag", HashTagSchema);