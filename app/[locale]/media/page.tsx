
import RandomArticleBlock from "@/app/components/blockRandomElements/randomArticleBlock";
import RandomNewsBlock from "@/app/components/blockRandomElements/randomNewsBlock";
import { routes } from "@/app/helpers/helpersFunctions";
import { getServerLocale } from "@/app/hooks/getServerLocale";
import { getLocale } from "@/app/hooks/server/getLocale";
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import { MediaPageContent } from "@/translate/mediaPage/mediaPageContent";
import Link from "next/link";



export default async function MediaPage({
    params
}: {
    params: Promise<{ locale: LocaleType }>
}) {
    // const locale = useLocale() as LocaleType
    // const locale = await getServerLocale(params)
    const locale = await getLocale() as LocaleType
    const routesAdaptive = routes(locale)
    console.log("Locale in MediaPage:", locale)
    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>

            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-mainContainer p-4 `}>
                <div className={`flex w-full justify-center gap-4 mb-4`}>
                    <Link href={routesAdaptive.news.root} className={`bg-buttonContainer p-4 rounded-large`}>{MediaPageContent[locale].title_news}</Link>
                    <Link href={routesAdaptive.articles.root} className={`bg-buttonContainer p-4 rounded-large`}>{MediaPageContent[locale].title_articles}</Link>
                </div>

                <RandomArticleBlock />
                {/* <RandomNewsBlock /> */}

            </div>
        </div>
    )
}
