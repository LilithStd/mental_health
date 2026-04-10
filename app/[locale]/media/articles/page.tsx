
import ArticlesClient from "@/app/components/articles/articlesClient"
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum"
import { getLocale } from "@/app/hooks/server/getLocale"
import { getAllArticles } from "@/app/service/articleService"
import { LocaleType } from "@/app/types/types"

// import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum"



export default async function ArticlesPage() {
    // const articles = await getAllArticles()
    // const getAllArticles = useArticleStore((state) => state.getAllArticles)
    const articles = await getAllArticles()


    return <ArticlesClient initialArticles={articles} type={SIZE_ELEMENT.MEDIUM} />

}