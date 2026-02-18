
import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum";
import ArticleClient from "./articleClient";
import NewArticleButton from "./articleComponents/newArticleButton";




export type ArticleType = {
    id: number
    title: string
    author: string
    content: string
    createdAt: string
}

interface ArticlesClientProps {
    initialArticles: ArticleType[]
}

export default function ArticlesClient({ initialArticles }: ArticlesClientProps) {
    const articles = initialArticles

    return (
        <div className={`flex flex-col indents-main-container rounded-medium flex-1 items-center`}>
            <div className={`flex flex-col flex-1 max-w-6xl  rounded-large bg-mainContainer  p-4`}>
                <div className={`flex flex-col justify-center items-center gap-4 `}>
                    <NewArticleButton />
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-4  mb-4 max-content-main-container`}>

                    {articles.map((article) =>
                        <ArticleClient key={article.id} article={article} type={ARTICLE_TYPE.MEDIUM} />
                    )}
                </div>
            </div>


        </div>
    )
}
