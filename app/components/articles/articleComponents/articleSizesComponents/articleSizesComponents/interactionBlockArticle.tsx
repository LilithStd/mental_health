import { formattedDate } from "@/app/helpers/helpersFunctions"
import RatingArticle from "./ratingArticle"
import { ArticleType, LocaleType } from "@/app/types/types"
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum"
import { ArticleContent } from "@/translate/mediaPage/articleContent/articleContent"
import { useLocale } from "@/app/hooks/useLocale"

interface InteractionBlockArticleProps {
    typeArticle: SIZE_ELEMENT,
    article:ArticleType
}

export default function InteractionBlockArticle({ typeArticle, article }: InteractionBlockArticleProps) {
    const locale = useLocale() as LocaleType
    return (
        <div className={`flex flex-col  w-full gap-2 items-start mt-2`}>
            <div className={`flex flex-col w-full`}>
                <RatingArticle article={article} typeArticle={typeArticle}/>                
                <span className={`text-sm pl-2 pt-2 italic opacity-40`}>{ArticleContent[locale].publishedOn}: {formattedDate(article.createdAt)}</span>
            </div>
        </div>
    )
}
