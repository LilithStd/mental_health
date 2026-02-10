'use client';
import { pickRandomUnique } from "@/app/helpers/helpersFunctions";
import { useEffect, useState } from "react";
import News, { NewsType } from "../news/news";
import { NEWS_TYPE } from "@/app/globalConsts/globalEnum";
import Loading from "../shared/loading";



export default function RandomNewsBlock() {
    // state
    const [news, setNews] = useState<NewsType[]>([])
    const [loading, setLoading] = useState(true)
    //stores


    useEffect(() => {
        fetch('/api/news')
            .then(res => res.json())
            .then(data => {
                const randomNews = pickRandomUnique(data.news as NewsType[], 2);
                setNews(randomNews)
                setLoading(false)
            })
    }, [])

    return (
        <div className={`flex flex-col bg-subContainer indents-main-container rounded-medium max-content-main-container gap-4`}>
            <div>
                <h2 className={`text-3xl indents-main-container font-bold bg-accentElement rounded-large`}>Random News</h2>
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
