

import News from "@/app/components/news/news";
import ReturnButton from "@/app/components/returnButton";
import { NEWS_TYPE } from "@/app/globalConsts/globalEnum";
import { routes } from "@/app/helpers/helpersFunctions";
import { getNewsById } from "@/app/serverActions/newsStorage";




export default async function CurrentNews({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    // stores
    // state
    // const [currentNews, setCurrentNews] = useState<NewsType | null>(null)
    const currentNews = await getNewsById(Number(id))

    return (
        <div className={`flex  flex-col indents-main-container  flex-1 items-center`}>
            {currentNews && (
                <div className={`flex  gap-4 p-4 flex-col flex-1 max-w-6xl items-center  rounded-large bg-mainContainer `}>
                    <ReturnButton pathToReturn={routes.news.root} />
                    <News news={currentNews} typeNews={NEWS_TYPE.FULL} />
                </div>)}
        </div>
    )
}

