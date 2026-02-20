import ArticlesClient from "../components/articles/articlesClient"
import { getAllArticles } from "../serverActions/articleStorage"


export default async function ArticlesPage() {
    const articles = await getAllArticles()
    return <ArticlesClient initialArticles={articles} />

}