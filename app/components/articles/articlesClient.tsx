
// import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum";
import ArticleClient from "./articleClient";
import NewArticleButton from "./articleComponents/newArticleButton";
import { routes } from "@/app/helpers/helpersFunctions";
import ReturnButton from "../returnButton";
import { LocaleType } from "@/app/types/types";
import { MediaPageContent } from "@/translate/mediaPage/mediaPageContent";
import { getLocale } from "@/app/hooks/server/getLocale";
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum";





export type ArticleType = {
    id: number
    title: string
    author: string
    content: string
    createdAt: string
}

interface ArticlesClientProps {
    initialArticles: ArticleType[],
    type: SIZE_ELEMENT,
}

export default async function ArticlesClient({ initialArticles, type }: ArticlesClientProps) {

    const locale = await getLocale() as LocaleType
    const routesAdaptive = routes(locale)
    const articles = initialArticles



    const randomArticlesComponent = <div className={`flex flex-col indents-main-container rounded-large  `}>
        <h2 className={`text-3xl  bg-primary-color/30 rounded-large  p-4 mb-4`}>{MediaPageContent[locale].random_articles}</h2>
        <div className={`flex flex-col gap-4`}>
            {articles.map((article) =>
                <ArticleClient key={article.id} article={article} type={type} />
            )}
        </div>
    </div>

    const regularArticlesComponent =
            <div className={`flex flex-col flex-1 rounded-large p-4`}>
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
    return (
        <div className={`flex flex-col indents-main-container rounded-medium flex-1 items-center`}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 border border-primary-color/30 p-4 shadow-md`}>
                {type === SIZE_ELEMENT.PREVIEW ? randomArticlesComponent : regularArticlesComponent}
            </div>
        </div>

    )
}
