

import News from "@/app/components/news/news";
import ReturnButton from "@/app/components/returnButton";
import { NEWS_TYPE } from "@/app/globalConsts/globalEnum";
import { routes } from "@/app/helpers/helpersFunctions";
import { getLocale } from "@/app/hooks/server/getLocale";
import { getNewsById } from "@/app/serverActions/newsStorage";
import { LocaleType } from "@/app/types/types";




export default async function CurrentNews({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const locale = await getLocale() as LocaleType
    const routesAdaptive = routes(locale)
    // stores
    // state
    // const [currentNews, setCurrentNews] = useState<NewsType | null>(null)
    const currentNews = await getNewsById(Number(id))

    return (
        <div className={`flex flex-col indents-main-container rounded-medium flex-1 items-center`}>
            {currentNews && (
                <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-mainContainer p-4 `}>
                    <div className={`flex w-full justify-start mb-4`}>
                        <ReturnButton pathToReturn={routesAdaptive.media.root} />
                    </div>
                    <News news={currentNews} typeNews={NEWS_TYPE.FULL} />
                </div>)}
        </div>
    )
}

