'use client'
import { ArticleType} from "@/app/types/types"
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum"
import FullArticleSize from "./articleComponents/articleSizesComponents/fullSizeArticle"
import MediumSizeArticle from "./articleComponents/articleSizesComponents/mediumSizeArticle"
import SmallSizeArticle from "./articleComponents/articleSizesComponents/smallSizeArticle"




interface ArticleProps {
    article: ArticleType
    typeArticle: SIZE_ELEMENT
}


export default function Article({ article, typeArticle }: ArticleProps) {
    // components


    return (
        <article key={article.id} className={`rounded-large   w-full  flex flex-col`}>
            {typeArticle === SIZE_ELEMENT.SMALL && <SmallSizeArticle article={article}/>}
            {typeArticle === SIZE_ELEMENT.MEDIUM && <MediumSizeArticle article={article}/>}
            {typeArticle === SIZE_ELEMENT.FULL && <FullArticleSize article={article}/>}
        </article>

    )
}
