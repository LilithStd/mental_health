import { ArticleType } from "@/app/articles/page";
import { getArticleLikes } from "@/app/serverActions/likesStorage";
import Article from "./article";
import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum";
export default async function ArticleServerLikesWrapper({ article, type }: { article: ArticleType, type: ARTICLE_TYPE }) {
    const likes = await getArticleLikes(article.id)
    return (
        <Article article={article} initialLikesCount={likes} typeArticle={type} />
    )
}