
import { getArticleLikes } from "@/app/serverActions/likesStorage";
import Article from "./article";

import { ArticleType } from "./articlesClient";
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum";

export default async function ArticleServerLikesWrapper({ article, type }: { article: ArticleType, type: SIZE_ELEMENT }) {
    const likes = await getArticleLikes(article.id)
    return (
        <Article article={article} initialLikesCount={likes.likesCount} typeArticle={type} />
    )
}