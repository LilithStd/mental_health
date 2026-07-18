
import RandomArticleBlock from "@/app/components/blockRandomElements/randomArticleBlock";
import RandomNewsBlock from "@/app/components/news/randomNewsBlock";
import { LINK_RAW_PATH } from "@/app/globalConsts/globalConsts";
import { routes } from "@/app/helpers/helpersFunctions";
import { getLocale } from "@/app/hooks/server/getLocale";
import { LocaleType } from "@/app/types/types";
import { MediaPageContent } from "@/translate/mediaPage/mediaPageContent";
import Link from "next/link";
import Image from "next/image";



export default async function MediaPage() {
    const locale = await getLocale() as LocaleType
    const routesAdaptive = routes(locale)

    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>

            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
                <div className={`flex w-full justify-start mb-4 z-10`}>
                    <Link href={routesAdaptive.news.root} className={` bg-primary-color/50 cursor-pointer pb-2 pt-2 pl-4 pr-4 rounded-circle`}>{MediaPageContent[locale].titleNews}</Link>
                    <Link href={routesAdaptive.articles.root} className={` bg-primary-color/50 cursor-pointer pb-2 pt-2 pl-4 pr-4 rounded-circle`}>{MediaPageContent[locale].titleArticles}</Link>
                    <Link href={routesAdaptive.library.root} className={` bg-primary-color/50 cursor-pointer pb-2 pt-2 pl-4 pr-4 rounded-circle`}>{MediaPageContent[locale].titleLibrary}</Link>
                </div>

                {/* <RandomArticleBlock /> */}
                {/* <RandomNewsBlock /> */}
            <Image src={LINK_RAW_PATH.butterflyBG} alt="Background Image" fill className="  w-full h-full z-0 object-cover rounded-large opacity-20" />
            </div>
            
        </div>
    )
}
