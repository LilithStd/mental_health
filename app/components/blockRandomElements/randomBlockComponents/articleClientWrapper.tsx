import { ARTICLE_TYPE } from '@/app/globalConsts/globalEnum'
import Article from '../../articles/article'
import loading from '../../shared/loading'
import { ArticleType } from '../../articles/articlesClient'
import Loading from '../../shared/loading'

interface ArticleClientWrapperProps {
    articles: ArticleType[]
}

export default function ArticleClientWrapper({ articles }: ArticleClientWrapperProps) {
    return (
        <div className={`flex flex-col bg-subContainer indents-main-container rounded-large  `}>
            <h2 className={`text-3xl font-bold bg-mainContainer rounded-large indents-main-container`}>Random Article</h2>
            <div>
                {

                    articles.map(article => (

                        <Article key={article.id} article={article} typeArticle={ARTICLE_TYPE.PREVIEW} initialLikesCount={0} />

                    ))
                }
            </div>
        </div>

    )
}
