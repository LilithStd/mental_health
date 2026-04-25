

import News from "@/app/components/news/news";
import ReturnButton from "@/app/components/returnButton";
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum";
// import { NEWS_TYPE } from "@/app/globalConsts/globalEnum";
import { routes } from "@/app/helpers/helpersFunctions";
import { getLocale } from "@/app/hooks/server/getLocale";
import { getNewsById } from "@/app/service/newsService";
// import { getNewsById } from "@/app/serverActions/newsStorage";
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
    const currentNews = await getNewsById(id)

    return (
        <div className={`flex flex-col indents-main-container rounded-medium flex-1 items-center`}>
            {currentNews && (
                <div className={`flex w-full flex-col flex-1 max-w-6xl border border-primary-color/30 rounded-large bg-primary-color/20 p-4 shadow-lg`}>
                    <div className={`flex w-full justify-start mb-4`}>
                        <ReturnButton pathToReturn={routesAdaptive.media.root} />
                    </div>
                    <News news={currentNews} typeNews={SIZE_ELEMENT.FULL} />
                </div>)}
        </div>
    )
}

