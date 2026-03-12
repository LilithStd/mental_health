import { getArticlesByOptions } from "@/app/serverActions/articleStorage"
import ArticlesClient from "../../articles/articlesClient"
import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum"


export default async function ArticleServerWrapper() {

    const randomArtciles = await getArticlesByOptions(2)

    return <ArticlesClient initialArticles={randomArtciles} type={ARTICLE_TYPE.PREVIEW} />
}
