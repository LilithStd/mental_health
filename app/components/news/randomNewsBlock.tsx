'use client';
import { pickRandomUnique } from "@/app/helpers/helpersFunctions";
import { useEffect, useState } from "react";
import News from "./news";
// import { NEWS_TYPE } from "@/app/globalConsts/globalEnum";
import Loading from "../shared/loading";
import { LocaleType, NewsType } from "@/app/types/types";
import { useLocale } from "@/app/hooks/useLocale";
import { MediaPageContent } from "@/translate/mediaPage/mediaPageContent";
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum";



export default function RandomNewsBlock() {
    // state
    const locale = useLocale() as LocaleType
    const [news, setNews] = useState<NewsType[]>([])
    const [loading, setLoading] = useState(true)
    //stores


    useEffect(() => {
        fetch(`/api/news?locale=${locale}`)
            .then(res => res.json())
            .then(data => {
                const randomNews = pickRandomUnique(data.news as NewsType[], 2);
                setNews(randomNews)
                setLoading(false)
            })
    }, [locale])

    return (
        <div className={`flex flex-col indents-main-container rounded-large  `}>
            <h2 className={`text-3xl bg-primary-color/30 border border-primary-color/30 shadow-md p-4  font-bold  rounded-large mb-4`}>{MediaPageContent[locale].random_news}</h2>
            <div className={`flex flex-col gap-4`}>
                {loading ? (
                    <Loading />
                ) : (
                    news.map((item) => (
                        <News key={item.id} news={item} typeNews={SIZE_ELEMENT.PREVIEW} />
                    ))
                )}
            </div>

        </div>
    )
}
