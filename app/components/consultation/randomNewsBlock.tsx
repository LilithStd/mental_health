'use client';
import { pickRandomUnique } from "@/app/helpers/helpersFunctions";
import { useEffect, useState } from "react";
import News, { NewsType } from "../news/news";
import { NEWS_TYPE } from "@/app/globalConsts/globalEnum";
import Loading from "../shared/loading";
import { LocaleType } from "@/app/types/types";
import { useLocale } from "@/app/hooks/useLocale";
import { MediaPageContent } from "@/translate/mediaPage/mediaPageContent";



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
        <div className={`flex flex-col bg-subContainer indents-main-container rounded-large  gap-4`}>
            <div>
                <h2 className={`text-3xl indents-main-container font-bold bg-mainContainer rounded-large`}>{MediaPageContent[locale].random_news}</h2>
            </div>
            <div className={`flex flex-col gap-4 m-4`}>
                {loading ? (
                    <Loading />
                ) : (
                    news.map((item) => (
                        <News key={item.id} news={item} typeNews={NEWS_TYPE.PREVIEW} />
                    ))
                )}
            </div>

        </div>
    )
}
