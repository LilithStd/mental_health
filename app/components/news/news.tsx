'use client'

import { NEWS_TYPE } from "@/app/globalConsts/globalEnum"
import Favorites from "../shared/favorites"
import { cropContent } from "@/app/helpers/helpersFunctions"
import { CROP_CONTAINER_SIZE } from "@/app/globalConsts/globalConsts"
import { useGlobalStore } from "@/app/store/globalStore"
import { rounded, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles"
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
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    // 
    // states

    // 
    // handlers
    //
    // components
    const previewNewsComponent = <div className={`flex w-full flex-col mb-4 p-2`}>
        <h3 className="font-bold">{news.title}</h3>
        <p>{cropContent(news.content, CROP_CONTAINER_SIZE.MEDIUM)}</p>
        <div className={`flex w-full justify-end`}>
            <button className={`${THEME_COLOR_SCHEME[currentTheme].buttonContainer} p-2 ${rounded.medium}  flex justify-center items-center`} onClick={() => { router.push(`/news/${news.id}`) }}>read full news</button>
        </div>

    </div>
    const fullNewsComponent = <div className={`flex w-full flex-col mb-4 p-2 ${THEME_COLOR_SCHEME[currentTheme].subContainer} ${rounded.medium}`}>
        <h3 className="font-bold">{news.title}</h3>
        <p>{news.content}</p>
        <a href={news.link} target="_blank" rel="noopener noreferrer" className=" underline">Read more</a>
    </div>
    //  
    return (
        <div className={`flex flex-col mb-4 p-2 w-full  ${rounded.medium}`}>
            {typeNews === NEWS_TYPE.PREVIEW ? previewNewsComponent : fullNewsComponent}
        </div>
    )
}
