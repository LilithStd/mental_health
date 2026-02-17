import { getArticleLikes } from '@/app/serverActions/likesStorage'
import Article from '@/app/components/articles/article'
import { ARTICLE_TYPE } from '@/app/globalConsts/globalEnum'
import { getArticleById } from '@/app/serverActions/articleStorage'

export default async function ArticlePage({
    params,
}: {
    params: { id: string }
}) {
    const { id } = await params

    const article = await getArticleById(Number(id))

    if (!article) {
        return <div>Статья не найдена</div>
    }

    const likes = await getArticleLikes(article.id)

    return (
        <div className={`flex flex-col indents-main-container rounded-medium flex-1 items-center`}>
            <div className={`flex flex-col flex-1 max-w-6xl  rounded-large bg-mainContainer  p-4`}>
                <Article
                    article={article}
                    initialLikesCount={likes.likesCount}
                    typeArticle={ARTICLE_TYPE.FULL}
                />
            </div>

        </div>
    )
}