'use client'

import { NEWS_TYPE } from "@/app/globalConsts/globalEnum"
import { cropContent, routes, } from "@/app/helpers/helpersFunctions"
import { CROP_CONTAINER_SIZE } from "@/app/globalConsts/globalConsts"

import { useRouter } from "next/navigation"

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
    const router = useRouter();
    // stores
    // 
    // states

    // 
    // handlers
    //
    // components
    const previewNewsComponent = <div className={`flex w-full flex-col p-4  bg-mainContainer rounded-large`}>
        <h3 className="font-bold">{news.title}</h3>
        <p>{cropContent(news.content, CROP_CONTAINER_SIZE.MEDIUM)}</p>
        <div className={`flex w-full justify-end`}>
            <button className={`bg-buttonContainer p-4 rounded-large flex justify-center items-center cursor-pointer hover:scale-105 `} onClick={() => { router.push(routes.news.byId(news.id)) }}>
                <span className={`text-shadow-lg`}>
                    Read full news
                </span>

            </button>
        </div>
    </div>

    const mediumNewsComponent = <div className={`flex w-full flex-col p-4  bg-subContainer rounded-large`}>
        <h3 className="font-bold">{news.title}</h3>
        <p>{cropContent(news.content, CROP_CONTAINER_SIZE.MEDIUM)}</p>
        <div className={`flex w-full justify-end`}>
            <button className={`bg-buttonContainer p-4 rounded-large flex justify-center items-center cursor-pointer hover:scale-105 `} onClick={() => { router.push(routes.news.byId(news.id)) }}>
                <span className={`text-shadow-lg`}>
                    Read full news
                </span>

            </button>
        </div>
    </div>


    const fullNewsComponent = <div className={`flex flex-col w-full bg-mainContainer rounded-large p-4`}>
        <div className={`flex flex-col w-full gap-4 bg-subContainer p-4 rounded-large`}>
            <h3 className="font-bold">{news.title}</h3>
            <p>{news.content}</p>
            <a href={news.link} target="_blank" rel="noopener noreferrer" className="underline">Read more</a>
        </div>

    </div>
    //  
    return (
        <div className={`w-full flex justify-center`}>
            <div className={`flex w-full max-w-6xl rounded-large bg-mainContainer`}>
                {typeNews === NEWS_TYPE.PREVIEW && previewNewsComponent}
                {typeNews === NEWS_TYPE.MEDIUM && mediumNewsComponent}
                {typeNews === NEWS_TYPE.FULL && fullNewsComponent}
            </div>
        </div>
    )
}
