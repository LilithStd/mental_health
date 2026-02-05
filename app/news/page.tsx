'use client';

import { useEffect, useState } from "react";
import Search from "../components/shared/search";
import { THEME_COLOR_SCHEME, rounded, indents } from "../globalConsts/globalStyles";
import { useGlobalStore } from "../store/globalStore";
import News, { NewsType } from "../components/news/news";
import { NEWS_TYPE } from "../globalConsts/globalEnum";


export default function AllNews() {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    // state
    const [news, setNews] = useState<NewsType[]>([])
    const [loading, setLoading] = useState(true)
    // functions

    useEffect(() => {
        fetch('/api/news')
            .then(res => res.json())
            .then(data => {
                setNews(data.news)
                setLoading(false)
            })
    }, [])

    return (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium} flex-1 ${indents.container.main}  items-center text-center`}>
            {/* <Search /> */}
            {loading ? (<div>Loading...</div>
            ) : (
                <div>
                    {news.map((newsItem) => (
                        <News key={newsItem.id} news={newsItem} typeNews={NEWS_TYPE.PREVIEW} />
                    ))}
                </div>
            )}
        </div>
    )
}
