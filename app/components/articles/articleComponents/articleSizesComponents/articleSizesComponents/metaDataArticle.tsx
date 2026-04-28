'use client'
import { useLocale } from "@/app/hooks/useLocale"
import { ArticleType, LocaleType } from "@/app/types/types"
import AuthorIcon from "@/public/icons/user/User.svg"
import { ArticleContent } from "@/translate/mediaPage/articleContent/articleContent"

interface MetaDataArticleProps {
    article: ArticleType
}

export default function MetaDataArticle({ article }: MetaDataArticleProps) {
    const locale = useLocale() as LocaleType
    const date = new Date(article.createdAt);
    const formattedDate = date.toLocaleDateString('sv-SE');
    return    (
    <div className={`flex items-top gap-2`}>
            <div
                className={`
                    flex  flex-col items-center gap-2 p-2
                    bg-primary-color/30
                    border border-primary-color/30
                    shadow-md
                    rounded-large
                `}
            >
                <div className={`flex justify-center items-center rounded-circle bg-primary-color/30`}>
                    <AuthorIcon className="w-30 h-30 fill-current" />
                </div>
            </div>
            <div>
                <h2 className={`flex h-fit text-2xl  rounded-large font-bold`}>{article.title[locale]}</h2>
                <h3 className={`italic opacity-70 flex items-center gap-2`}>
                    {ArticleContent[locale].author}: <span>{article.author ? article.author[locale] : 'Unknown author'}</span>
                </h3>
                <span className={`text-sm  italic opacity-70`}>{ArticleContent[locale].publishedOn}: {formattedDate}</span>
            </div>

        </div>
  )
}
