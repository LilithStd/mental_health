import { formattedDate } from "@/app/helpers/helpersFunctions"
import RatingArticle from "./ratingArticle"
import { ArticleType } from "@/app/types/types"
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum"

interface InteractionBlockArticleProps {
    typeArticle: SIZE_ELEMENT,
    article:ArticleType
}

export default function InteractionBlockArticle({ typeArticle, article }: InteractionBlockArticleProps) {
  return (
        <div className={`flex flex-col  w-full gap-2 items-start mt-2`}>
            <div className={`flex flex-col w-full`}>
                <RatingArticle article={article} typeArticle={typeArticle}/>                
                <span className={`text-sm pl-2 pt-2 italic opacity-40`}>Published on: {formattedDate(article.createdAt)}</span>
            </div>
        </div>
  )
}
