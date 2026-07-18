
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
import Image from 'next/image'
import { LINK_RAW_PATH } from '@/app/globalConsts/globalConsts'
import RedirectAndPathComponent from '@/app/components/mediaPageComponents/redirectAndPathComponent'
import { MediaPageContent } from '@/translate/mediaPage/mediaPageContent'



export default async function ArticlePage({
    params,
}: {
    params: { id: string},
}) {
    const { id} = await params

    const articleById = await getArticleById(id)
    const locale = await getLocale() as LocaleType
    const routesAdaptive = routes(locale)
    console.log(articleById)
    if (!articleById) {
        return <div>Статья не найдена</div>
    }

    return (
        <div className={`flex flex-col indents-main-container rounded-medium flex-1 items-center`}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
               <RedirectAndPathComponent links={[
                {
                    name: MediaPageContent[locale].titleArticles,
                    href: routesAdaptive.articles.root
                },
                {
                    name: articleById.title[locale],
                    href: routesAdaptive.articles.root
                }]} pathToRedirect={routesAdaptive.media.root} />
                <Article
                    article={articleById}
                    typeArticle={SIZE_ELEMENT.FULL}
                />
                <Image src={LINK_RAW_PATH.butterflyBG} alt="Background Image" fill className="  w-full h-full z-0 object-cover rounded-large opacity-20" />
            </div>

        </div>
    )
}