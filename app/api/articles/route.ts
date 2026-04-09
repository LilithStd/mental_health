// app/api/articles/route.ts
// import { ArticleType } from "@/types/article";

import { Article } from "@/app/models/article";
import { ArticleType } from "@/app/types/types";

export async function GET(): Promise<Response> {
  const articles: ArticleType[] = await Article.find();
  return Response.json(articles);
}