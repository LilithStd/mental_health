import ArticlesClient from "../components/articles/articlesClients"
import { getAllArticles } from "../serverActions/articleStorage"


export default async function ArticlesPage() {
    const articles = await getAllArticles()

    // console.log('ArticlesPage: fetched articles', articles);
    return <ArticlesClient initialArticles={articles} />
}