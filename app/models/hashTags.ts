import { MultiLanguageText } from "../types/types";

export interface HashTagTypes extends Document {
    id: string,
    title: MultiLanguageText,
    color: string,
    createdAt: Date,
    updatedAt?: Date
}