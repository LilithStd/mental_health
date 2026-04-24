import { ArticleType } from "@/app/types/types"


interface UpdateArticleComponent {
    updatedArticle: ArticleType
}

export default function UpdateArticle({updatedArticle}: UpdateArticleComponent) {
  return (
    <div>updateArticle</div>
  )
}
