import { ArticleType } from "@/app/types/types"

interface MediumSizeArticleProps {
    article: ArticleType // Define any props that MediumSizeArticle might need
}

export default function MediumSizeArticle({ article }: MediumSizeArticleProps) {
  return    (
    <div>MediumSizeArticle</div>
  )
}
