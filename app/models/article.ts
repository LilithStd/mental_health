
import { model, models, Schema } from "mongoose";
import { ArticleType } from "../types/types";

// import { ArticleType } from "@/types/article";

const ArticleSchema = new Schema<ArticleType>({
    id: Number,
    multiLanguage: Boolean,
    title: {
        en: String,
        ru: String,
        lv: String
    },
    description: {
        en: String,
        ru: String,
        lv: String
    },
    content: {
        en: String,
        ru: String,
        lv: String
    },
    date: String
});

export const Article = models.Article || model<ArticleType>("Article", ArticleSchema);