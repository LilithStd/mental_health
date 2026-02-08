'use client';


import News, { NewsType } from "@/app/components/news/news";
import { NEWS_TYPE } from "@/app/globalConsts/globalEnum";
import { indents, rounded, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles";
import { useGlobalStore } from "@/app/store/globalStore";
import { use, useEffect, useState } from "react";



export default function CurrentNews({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = use(params)
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    // state
    const [currentNews, setCurrentNews] = useState<NewsType | null>(null)
    const [error, setError] = useState(false)
    //
    useEffect(() => {
        fetch(`/api/news?id=${id}`)
            .then(r => {
                if (!r.ok) {
                    setError(true)
                    return null
                }
                return r.json()
            })
            .then(data => {
                if (data) {
                    setCurrentNews(data.news)
                }
            })
    }, [id])
    return (
        <div className={`flex flex-col bg-mainContainer ${rounded.medium} flex-1 ${indents.container.main}  items-center text-center`}>
            {/* <Search /> */}
            {currentNews && !error && (
                <div>
                    <News news={currentNews} typeNews={NEWS_TYPE.FULL} />
                </div>)}
        </div>
    )
}

