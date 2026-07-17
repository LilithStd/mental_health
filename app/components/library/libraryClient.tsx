'use client'
import Image from "next/image"
import { SEARCH_REQUEST_TYPE, SIZE_ELEMENT } from "@/app/globalConsts/globalEnum"
import { useLocale } from "@/app/hooks/useLocale"
import { LibraryTypes } from "@/app/models/library"
import { LibraryType, LocaleType } from "@/app/types/types"
import { LibraryContent } from "@/translate/mediaPage/libraryContent/libraryContent"
import ReturnButton from "../returnButton"
import HashTags from "../shared/hashTags"
import Search from "../shared/search"
import CreateElementLibrary from "./createElementLibrary"
import { routes } from "@/app/helpers/helpersFunctions"
import { useState } from "react"
import { LINK_RAW_PATH } from "@/app/globalConsts/globalConsts"
import RedirectAndPathComponent from "../mediaPageComponents/redirectAndPathComponent"

interface LibraryClientProps {
  libraryData: LibraryType[]
}

export default function LibraryClient({ libraryData }: LibraryClientProps) {
    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    const [searchResults, setSearchResults] = useState<LibraryType[]>([]);
    const [resultsFound, setResultsFound] = useState<boolean | null>(null);


    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4 z-10`}>
                {/* <div className={`flex w-full justify-start mb-4 z-10`}>
                    <ReturnButton pathToReturn={routesAdaptive.media.root} />
                </div> */}
                <RedirectAndPathComponent links={[{
                    name: LibraryContent[locale].title,
                    href: routesAdaptive.library.root
                }]} pathToRedirect={routesAdaptive.media.root} />
                <div className={`flex w-full justify-center gap-4 mb-4 z-10`}>
                    <span>{LibraryContent[locale].title}</span>
                </div>
                <div className={`flex w-full justify-center gap-4 mb-4 z-10`}>
                    <Search requestType={SEARCH_REQUEST_TYPE.TITLE} query={""} 
                    callBackResultAfterSearch={setSearchResults} arrayForSearch={libraryData} locale={locale}  setResultsFound={setResultsFound} />
                </div>
                <div className={`flex w-full justify-center pr-4 mb-4 z-10`}>
                    <CreateElementLibrary />
                </div>
                <div className={`flex flex-col gap-4 z-10 `}>
                        {resultsFound && resultsFound !== null && searchResults.map(item => (
                            <div key={item.id} className={`flex flex-col gap-2 p-4 bg-primary-color/50 rounded-large`}>
                                <span className={`text-2xl`}>{item.title[locale]}</span>                        
                                <span className={`text-sm italic`}>{LibraryContent[locale].type}:{item.type}</span>   
                                <HashTags hashTags={item.hashTags.length > 0 ? item.hashTags : ['depression']} type={SIZE_ELEMENT.SMALL} />
                                    <details key={item.id} className={`flex flex-col gap-2 p-4 bg-primary-color/50 rounded-large`}>
                                    
                                    <summary className={`font-bold cursor-pointer`}>Description</summary>
                                    <p>{item.content[locale]}</p>
                                </details>
                            </div>
                        ))  }
                        {resultsFound === false && <span className={`text-lg`}>{LibraryContent[locale].notFoundElement}</span>}
                        {searchResults.length === 0 && resultsFound === null && libraryData.map(item => (
                            <div key={item.id} className={`flex flex-col gap-2 p-4 bg-primary-color/20 rounded-large`}>
                                <span className={`text-2xl`}>{item.title[locale]}</span>
                                <span className={`text-sm italic`}>{LibraryContent[locale].type}:{item.type}</span>   
                                <HashTags hashTags={item.hashTags.length > 0 ? item.hashTags : ['depression']} type={SIZE_ELEMENT.SMALL} />
                                <details key={item.id} className={`flex flex-col gap-2 p-4 bg-primary-color/50 rounded-large`}>
                                    <summary className={`font-bold cursor-pointer`}>Description</summary>
                                    <p>{item.content[locale]}</p>
                                </details>
                            </div>
                        ))}
                </div>
                <Image src={LINK_RAW_PATH.butterflyBG} alt="Background Image" fill className="  w-full h-full z-0 object-cover rounded-large opacity-20" />
            </div>
        </div>
    )
}
          