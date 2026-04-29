'use client'

// import { NEWS_TYPE } from "@/app/globalConsts/globalEnum"
import { cropContent, routes, } from "@/app/helpers/helpersFunctions"
import { CROP_CONTAINER_SIZE } from "@/app/globalConsts/globalConsts"
import { useRouter } from "next/navigation"

import PhotoIcon from '@/public/icons/Photo.svg'
import ReturnButton from "../returnButton"
import { useLocale } from "@/app/hooks/useLocale"
import { LocaleType, NewsType } from "@/app/types/types"
import { BUTTON_READ_FULL_NEWS } from "@/translate/mediaPage/mediaPageContent"
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum"
import HashTags from "../shared/hashTags"

// export type NewsType = {
//     id: number
//     title: string
//     content: string
//     createdAt: string
//     link: string
// }

interface NewsProps {
    news: NewsType,
    typeNews: SIZE_ELEMENT
}
export default function News({ news, typeNews }: NewsProps) {
    const router = useRouter();
    const locale = useLocale() as LocaleType;
    const routesAdaptive = routes(locale)
    // stores
    // 
    // states

    // 
    // handlers
    //
    // components
    const mediaRatingComponent = (type: SIZE_ELEMENT) => {
        return (
            <div className={`flex  w-full ${type === SIZE_ELEMENT.FULL ? '' : 'bg-primary-color/30 shadow-md border border-primary-color/30'} h-full  gap-2 justify-center items-center align-center  rounded-large p-2`}>
               <div className={`flex flex-col w-full gap-2`}>
                    <div>
                        <div className={`flex items-start gap-2`}>
                        <HashTags hashTags={['#mentalhealth', '#news']} type={type}/>
                    </div>
                        <div className={`flex  justify-start ml-auto mt-auto`}>
                            <span className={`text-sm`}>News date public: {news.createdAt}</span>
                        </div>
                    </div>
               </div>
                <div className={`flex w-full justify-end items-center`}>
                    {type === SIZE_ELEMENT.FULL ? <div className={`bg-primary-color/50 p-2 rounded-large flex cursor-pointer hover:scale-105 transition`}>
                    {news.links && news.links.length > 0 && news.links.map((link, index) => (
                        <a key={index} href={link} target="_blank" rel="noopener noreferrer" className={``}>Source Link</a>
                    ))}
                </div> : <button className={`justify-center items-center bg-primary-color/50 p-2 rounded-large flex cursor-pointer hover:scale-105 transition`} onClick={() => { router.push(routesAdaptive.news.byId(news.id)) }}>
                        <span className={`${type === SIZE_ELEMENT.SMALL ? 'text-sm' : 'text-base'} `}>
                            {BUTTON_READ_FULL_NEWS[locale]}
                        </span>
                    </button>}
                    
                </div>
            </div>
        )
    }
    
    const previewNewsComponent = <div className={`grid grid-cols-[0.4fr_1fr] w-full gap-4  p-4  bg-primary-color/30 border border-primary-color/30 rounded-large`}>
        <div className={`flex w-full  bg-primary-color/30 border border-primary-color/30 rounded-large items-center justify-center`}>
            <PhotoIcon className={``} fill={'green'}/>
        </div>
        <div className={`flex flex-col p-4 rounded-large bg-primary-color/30 border border-primary-color/30 h-full`}>
            <h3 className="font-bold">{news.title[locale]}</h3>
            <p>{cropContent(news.content[locale], CROP_CONTAINER_SIZE.MEDIUM)}</p>
            <div className={`flex w-full justify-start ml-auto mt-auto pt-2`}>
                {mediaRatingComponent(typeNews)}
            </div>
            
        </div>

    </div>

    const mediumNewsComponent = <div className={`grid grid-cols-[0.45fr_1fr] w-full bg-primary-color/30 border border-primary-color/30 rounded-large`}>
        <div className={`image-size-large   rounded-large items-center justify-center`}>
            <PhotoIcon className={` `} fill={'green'}/>
        </div>
        <div className="flex flex-col p-4 rounded-large  h-full">
            <h3 className="font-bold">{news.title[locale]}</h3>

            <p className={``}>
                {cropContent(news.content[locale], CROP_CONTAINER_SIZE.MEDIUM)}
            </p>
            <div className={`flex w-full justify-start ml-auto mt-auto`}>
                {mediaRatingComponent(typeNews)}
            </div>

            {/* <div className="flex w-full justify-end mt-auto">
                <button
                    className="bg-primary-color p-4 rounded-large flex cursor-pointer hover:scale-105 transition"
                    onClick={() => { router.push(routesAdaptive.news.byId(news.id)) }}
                >
                    <span>{BUTTON_READ_FULL_NEWS[locale]}</span>
                </button>
            </div> */}
        </div>


    </div>


    const fullNewsComponent =
       <div className="grid grid-cols-[0.35fr_1fr] h-full w-full p-4 rounded-large">
            <div className="image-size-large rounded-large items-center justify-center">
                <PhotoIcon fill="green" />
            </div>
            <div className="flex flex-col w-full h-full gap-4 p-4 rounded-large">
                <h3 className="font-bold">{news.title[locale]}</h3>
                <p>{news.content[locale]}</p>
                <div className="flex  justify-start mt-auto">
                {mediaRatingComponent(typeNews)}
                </div>
            </div>

</div>

    //  
    return (
        <div className={`w-full h-full  flex justify-center`}>
            <div className={`flex w-full h-full items-center max-w-6xl  rounded-large`}>
                {typeNews === SIZE_ELEMENT.SMALL && previewNewsComponent}
                {typeNews === SIZE_ELEMENT.MEDIUM && mediumNewsComponent}
                {typeNews === SIZE_ELEMENT.FULL && fullNewsComponent}
            </div>
        </div>
    )
}
