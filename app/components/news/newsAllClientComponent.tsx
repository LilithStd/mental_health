import { NEWS_TYPE } from "@/app/globalConsts/globalEnum"
import News, { NewsType } from "./news"
import CreateNewsButtonComponent from "./newsComponents/createNewsButtonComponent"
import { routes } from "@/app/helpers/helpersFunctions"
import ReturnButton from "../returnButton"
import { getLocale } from "@/app/hooks/getlocale"

interface NewsClientComponentProps {
    initialNews: NewsType[]
}
export default async function NewsAllClientComponent({ initialNews }: NewsClientComponentProps) {
    const news = initialNews
    const locale = await getLocale()
    const routesAdaptive = routes(locale)


    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>

            {
                <div className={`flex  gap-4 p-4 flex-col flex-1 max-w-6xl items-center  rounded-large bg-mainContainer `}>
                    <div className={`flex w-full justify-start mb-4`}>
                        <ReturnButton pathToReturn={routesAdaptive.media.root} />
                    </div>
                    <CreateNewsButtonComponent />
                    {/* {isCreateArticleVisible && <CreateNews />} */}

                    {news.map((newsItem) => (
                        <News key={newsItem.id} news={newsItem} typeNews={NEWS_TYPE.MEDIUM} />
                    ))}
                </div>
            }
        </div>
    )

}
