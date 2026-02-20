import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum";
import { ArticleType } from "./articlesClient";
import ArticleServerLikesWrapper from "./articleServerLikesWrapper";

interface ArticleClientProps {
    article: ArticleType
    type: ARTICLE_TYPE
}

export default function ArticleClient({ article, type }: ArticleClientProps) {
    return (
        <ArticleServerLikesWrapper article={article} type={type} />
    )
}
