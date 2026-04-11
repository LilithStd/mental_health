'use server'

import { updateArticle } from "./articleStorage"

    

export async function updateArticleAction(
  id: string,
  title: string,
  content: string
) {
    updateArticle(id, { title, content })
}