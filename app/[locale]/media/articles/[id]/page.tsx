
import { getArticleLikes } from '@/app/serverActions/likesStorage'
import Article from '@/app/components/articles/article'
// import { ARTICLE_TYPE } from '@/app/globalConsts/globalEnum'
// import { getArticleById } from '@/app/serverActions/articleStorage'
import ReturnButton from '@/app/components/returnButton'
import { routes } from '@/app/helpers/helpersFunctions'
import { LocaleType } from '@/app/types/types'
import { getLocale } from '@/app/hooks/server/getLocale'
import { SIZE_ELEMENT } from '@/app/globalConsts/globalEnum'
import { getArticleById } from '@/app/service/articleService'


export default async function ArticlePage({
    params,
}: {
    params: { id: string},
}) {
    const { id} = await params

    const article = await getArticleById(id)
    const locale = await getLocale() as LocaleType
    const routesAdaptive = routes(locale)
    console.log(article)
    if (!article) {
        return <div>Статья не найдена</div>
    }

    // const likes = await getArticleLikes(article.id)

    return (
        <div className={`flex flex-col indents-main-container rounded-medium flex-1 items-center`}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/30 border border-primary-color/10 p-4 shadow-lg`}>
                <div className={`flex w-full justify-start mb-4`}>
                    <ReturnButton pathToReturn={routesAdaptive.articles.root} />
                </div>
                <Article
                    article={article}
                    // initialLikesCount={likes.likesCount}
                    typeArticle={SIZE_ELEMENT.FULL}
                />
            </div>

        </div>
    )
}