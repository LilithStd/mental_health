import { NEWS_TYPE } from "@/app/globalConsts/globalEnum"
import News, { NewsType } from "./news"
import CreateNewsButtonComponent from "./newsComponents/createNewsButtonComponent"

interface NewsClientComponentProps {
    initialNews: NewsType[]
}
export default function NewsAllClientComponent({ initialNews }: NewsClientComponentProps) {
    const news = initialNews


    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
            {/* <Search /> */}
            {
                <div className={`flex  gap-4 p-4 flex-col flex-1 max-w-6xl items-center  rounded-large bg-mainContainer `}>

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
