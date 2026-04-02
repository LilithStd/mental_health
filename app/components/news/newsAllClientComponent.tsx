// import { NEWS_TYPE } from "@/app/globalConsts/globalEnum"
import News, { NewsType } from "./news"
import CreateNewsButtonComponent from "./newsComponents/createNewsButtonComponent"
import { routes } from "@/app/helpers/helpersFunctions"
import ReturnButton from "../returnButton"
import { getLocale } from "@/app/hooks/server/getLocale"
import { LocaleType } from "@/app/types/types"
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum"

interface NewsClientComponentProps {
    initialNews: NewsType[],
}
export default async function NewsAllClientComponent({ initialNews }: NewsClientComponentProps) {
    const news = initialNews
    const locale = await getLocale() as LocaleType;
    const routesAdaptive = routes(locale)


    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center `}>
            {
                <div className={`flex  gap-4 p-4 flex-col flex-1 max-w-6xl items-center  rounded-large bg-primary-color/30 border border-primary-color/20 shadow-lg`}>
                    <div className={`flex w-full justify-start mb-4`}>
                        <ReturnButton pathToReturn={routesAdaptive.media.root} />
                    </div>
                    <CreateNewsButtonComponent />
                    {/* {isCreateArticleVisible && <CreateNews />} */}

                    {news.map((newsItem) => (
                        <News key={newsItem.id} news={newsItem} typeNews={SIZE_ELEMENT.MEDIUM} />
                    ))}
                </div>
            }
        </div>
    )

}
