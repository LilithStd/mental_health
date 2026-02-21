import { getArticlesByOptions } from "@/app/serverActions/articleStorage"
import ArticleClientWrapper from "./articleClientWrapper"

export default async function ArticleServerWrapper() {
    const randomArtciles = await getArticlesByOptions(2)
    return <ArticleClientWrapper articles={randomArtciles} />
}
