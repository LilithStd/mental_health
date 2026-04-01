import ArticlesClient from "@/app/components/articles/articlesClient"
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum"
// import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum"
import { getAllArticles } from "@/app/serverActions/articleStorage"



export default async function ArticlesPage() {
    const articles = await getAllArticles()
    return <ArticlesClient initialArticles={articles} type={SIZE_ELEMENT.MEDIUM} />

}