import { ArticleType } from "@/app/types/types"


interface UpdateArticleComponent {
    updatedArticle: ArticleType
}

export default function UpdateArticle({updatedArticle}: UpdateArticleComponent) {
  return (
    <div className={`flex flex-col gap-4 p-4 max-content-main-container rounded-large bg-primary-color/30 border border-primary-color/30 w-full`}>updateArticle</div>
  )
}
