import ArticlesClient from "../components/articles/articlesClient"
import { ARTICLE_TYPE } from "../globalConsts/globalEnum"
import { getAllArticles } from "../serverActions/articleStorage"


export default async function ArticlesPage() {
    const articles = await getAllArticles()
    return <ArticlesClient initialArticles={articles} type={ARTICLE_TYPE.MEDIUM} />

}