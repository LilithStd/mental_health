// import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum";
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum";
import { ArticleType } from "./articlesClient";
import ArticleServerLikesWrapper from "./articleServerLikesWrapper";
import { LocaleType } from "@/app/types/types";

interface ArticleClientProps {
    article: ArticleType
    type: SIZE_ELEMENT
}

export default function ArticleClient({ article, type }: ArticleClientProps) {
    return (
        <ArticleServerLikesWrapper article={article} type={type} />
    )
}
