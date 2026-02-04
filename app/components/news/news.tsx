'use client'

import { NEWS_TYPE } from "@/app/globalConsts/globalEnum"
import Favorites from "../shared/favorites"
import { cropContent } from "@/app/helpers/helpersFunctions"
import { CROP_CONTAINER_SIZE } from "@/app/globalConsts/globalConsts"

export type NewsType = {
    id: number
    title: string
    content: string
    createdAt: string
    link: string
}

interface NewsProps {
    news: NewsType,
    typeNews: NEWS_TYPE
}
export default function News({ news, typeNews }: NewsProps) {
    // states

    // 
    // handlers
    //
    // components
    const previewNewsComponent = <div className={`flex w-full flex-col mb-4 p-2`}>
        <h3 className="font-bold">{news.title}</h3>
        <p>{cropContent(news.content, CROP_CONTAINER_SIZE.MEDIUM)}</p>
    </div>
    const fullNewsComponent = <div className={`flex w-full flex-col mb-4 p-2`}>
        <h3 className="font-bold">{news.title}</h3>
        <p>{news.content}</p>
        <a href={news.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Read more</a>
    </div>
    //  
    return (
        <div className={`flex flex-col mb-4 p-2 w-full`}>
            {typeNews === NEWS_TYPE.PREVIEW ? previewNewsComponent : fullNewsComponent}
        </div>
    )
}
