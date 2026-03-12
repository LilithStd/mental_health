'use client'
import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum";
import ArticleClient from "./articleClient";
import NewArticleButton from "./articleComponents/newArticleButton";
import { routes } from "@/app/helpers/helpersFunctions";
import ReturnButton from "../returnButton";
import { LocaleType } from "@/app/types/types";
import { MediaPageContent } from "@/translate/mediaPage/mediaPageContent";
import { useLocale } from "@/app/hooks/useLocale";





export type ArticleType = {
    id: number
    title: string
    author: string
    content: string
    createdAt: string
}

interface ArticlesClientProps {
    initialArticles: ArticleType[],
    type: ARTICLE_TYPE,
}

export default function ArticlesClient({ initialArticles, type }: ArticlesClientProps) {

    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    const articles = initialArticles



    const randomArticlesComponent = <div className={`flex flex-col bg-subContainer indents-main-container rounded-large  `}>
        <h2 className={`text-3xl font-bold bg-mainContainer rounded-large indents-main-container`}>{MediaPageContent[locale].random_articles}</h2>
        <div>
            {articles.map((article) =>
                <ArticleClient key={article.id} article={article} type={type} />
            )}
        </div>
    </div>

    const regularArticlesComponent =
        <div className={`flex flex-col indents-main-container rounded-medium flex-1 items-center`}>

            <div className={`flex flex-col flex-1 max-w-6xl  rounded-large bg-mainContainer p-4`}>
                <div className={`flex w-full justify-start mb-4`}>
                    <ReturnButton pathToReturn={routesAdaptive.media.root} />
                </div>
                <div className={`flex flex-col justify-center items-center`}>
                    <NewArticleButton />
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-4  max-content-main-container`}>
                    {articles.map((article) =>
                        <ArticleClient key={article.id} article={article} type={type} />
                    )}
                </div>


            </div>
        </div>
    return (
        <div>

            {type === ARTICLE_TYPE.PREVIEW ? randomArticlesComponent : regularArticlesComponent}
        </div>

    )
}
