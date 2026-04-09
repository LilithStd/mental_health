import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
    id: Number,
  title: String,
  content: String,
  author: String,
  createdAt: Date,
});

export const Article =
  mongoose.models.Article ||
  mongoose.model("Article", ArticleSchema);