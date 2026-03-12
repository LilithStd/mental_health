import { getArticlesByOptions } from "@/app/serverActions/articleStorage"
import ArticlesClient from "../../articles/articlesClient"
import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum"
import { LocaleType } from "@/app/types/types"

export default async function ArticleServerWrapper({ locale }: { locale: LocaleType }) {

    const randomArtciles = await getArticlesByOptions(2)

    return <ArticlesClient initialArticles={randomArtciles} currentLocale={locale} type={ARTICLE_TYPE.PREVIEW} />
}
