'use client';
import { ArticleType } from "@/app/articles/page";
import { THEME_COLOR_SCHEME, rounded, font, sizes } from "@/app/globalConsts/globalStyles";
import { pickRandomUnique } from "@/app/helpers/helpersFunctions";
import { useGlobalStore } from "@/app/store/globalStore";
import { useEffect, useState } from "react";
import News, { NewsType } from "../news/news";
import { NEWS_TYPE } from "@/app/globalConsts/globalEnum";



export default function RandomNewsBlock() {
    // state
    const [news, setNews] = useState<NewsType[]>([])
    const [loading, setLoading] = useState(true)
    //stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);


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
                <h2 className={`${font.title.size.medium} indents-main-container ${font.title.weigth.bold} bg-accentElement rounded-large`}>Random News</h2>
            </div>
            <div className={`flex flex-col gap-4 m-4`}>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    news.map((item) => (
                        <News key={item.id} news={item} typeNews={NEWS_TYPE.PREVIEW} />
                    ))
                )}
            </div>

        </div>
    )
}
