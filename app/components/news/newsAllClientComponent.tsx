// import { NEWS_TYPE } from "@/app/globalConsts/globalEnum"
import Image from "next/image"
import News from "./news"
import CreateNewsButtonComponent from "./newsComponents/createNewsButtonComponent"
import { routes } from "@/app/helpers/helpersFunctions"
import ReturnButton from "../returnButton"
import { getLocale } from "@/app/hooks/server/getLocale"
import { LocaleType, NewsType } from "@/app/types/types"
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum"
import { MediaPageContent } from "@/translate/mediaPage/mediaPageContent"
import { LINK_RAW_PATH } from "@/app/globalConsts/globalConsts"
import PathLinks from "../mediaPageComponents/pathLinks"

interface NewsClientComponentProps {
    initialNews: NewsType[],
}
export default async function NewsAllClientComponent({ initialNews }: NewsClientComponentProps) {
    const news = initialNews
    const locale = await getLocale() as LocaleType;
    const routesAdaptive = routes(locale)


    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center `}>
                <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
                    <div className={`flex w-full justify-start mb-4 z-10`}>
                        <ReturnButton pathToReturn={routesAdaptive.media.root} />
                        <PathLinks links={[{
                            name: MediaPageContent[locale].titleNews,
                            href: routesAdaptive.news.root
                        }]} />
                    </div>
                    <CreateNewsButtonComponent />
                    {/* {isCreateArticleVisible && <CreateNews />} */}

                    <div className={`flex text-center w-full flex-col gap-4`}>
                        {news.length === 0 ? (
                        <p>{MediaPageContent[locale].noNews}</p>
                    ) : (
                        news.map((newsItem) => (
                            <News key={newsItem.id} news={newsItem} typeNews={SIZE_ELEMENT.MEDIUM} />
                        ))
                    )}
                    </div> 
                     <Image src={LINK_RAW_PATH.butterflyBG} alt="Background Image" fill className="  w-full h-full z-0 object-cover rounded-large opacity-20" />
                </div>
            
        </div>
    )

}
