'use client';


import News, { NewsType } from "@/app/components/news/news";
import { NEWS_TYPE } from "@/app/globalConsts/globalEnum";
import { use, useEffect, useState } from "react";



export default function CurrentNews({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = use(params)
    // stores
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
        <div className={`flex  flex-col indents-main-container  flex-1 items-center`}>
            {/* <Search /> */}
            {currentNews && !error && (
                <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-mainContainer`}>
                    <News news={currentNews} typeNews={NEWS_TYPE.FULL} />
                </div>)}
        </div>
    )
}

