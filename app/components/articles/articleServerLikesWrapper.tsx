
import { getArticleLikes } from "@/app/serverActions/likesStorage";
import Article from "./article";
import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum";
import { ArticleType } from "./articlesClient";

export default async function ArticleServerLikesWrapper({ article, type }: { article: ArticleType, type: ARTICLE_TYPE }) {
    const likes = await getArticleLikes(article.id)
    return (
        <Article article={article} initialLikesCount={likes.likesCount} typeArticle={type} />
    )
}