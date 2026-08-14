
import RandomArticleBlock from "@/app/components/blockRandomElements/randomArticleBlock";
import RandomNewsBlock from "@/app/components/news/randomNewsBlock";
import { LINK_RAW_PATH } from "@/app/globalConsts/globalConsts";
import { routes } from "@/app/helpers/helpersFunctions";
import { getLocale } from "@/app/hooks/server/getLocale";
import { LocaleType } from "@/app/types/types";
import { MediaPageContent } from "@/translate/mediaPage/mediaPageContent";
import Link from "next/link";
import Image from "next/image";
import ReturnButton from "@/app/components/returnButton";



export default async function MediaPage() {
    const locale = await getLocale() as LocaleType
    const routesAdaptive = routes(locale)

    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/8 shadow-lg backdrop-blur-md border border-primary-color/10 p-4`}>
                <div className={`flex w-full gap-2 justify-start mb-4 z-10`}>
                    <ReturnButton pathToReturn={routesAdaptive.media.root} />
                    <Link href={routesAdaptive.news.root} className={`p-4 w-fit bg-primary-color/10 backdrop-blur-md border border-primary-color/12 font-poiret shadow-lg z-10 font-bold italic rounded-full hover:bg-primary-color/40 hover:scale-105`}>{MediaPageContent[locale].titleNews}</Link>
                    <Link href={routesAdaptive.articles.root} className={`p-4 w-fit bg-primary-color/10 backdrop-blur-md border border-primary-color/12 font-poiret shadow-lg z-10 font-bold italic rounded-full hover:bg-primary-color/40 hover:scale-105`}>{MediaPageContent[locale].titleArticles}</Link>
                    <Link href={routesAdaptive.library.root} className={`p-4 w-fit bg-primary-color/10 backdrop-blur-md border border-primary-color/12 font-poiret shadow-lg z-10 font-bold italic rounded-full hover:bg-primary-color/40 hover:scale-105`}>{MediaPageContent[locale].titleLibrary}</Link>
                </div>

                {/* <RandomArticleBlock /> */}
                {/* <RandomNewsBlock /> */}
            {/* <Image src={LINK_RAW_PATH.butterflyBG} alt="Background Image" fill className="  w-full h-full z-0 object-cover rounded-large opacity-20" /> */}
            </div>
            
        </div>
    )
}
