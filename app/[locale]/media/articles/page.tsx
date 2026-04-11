import ArticlesClient from "@/app/components/articles/articlesClient"
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum"
import { getAllArticles } from "@/app/service/articleService"




export default async function ArticlesPage() {
    const articles = await getAllArticles()
    return <ArticlesClient initialArticles={articles} typeArticle={SIZE_ELEMENT.MEDIUM} />
}