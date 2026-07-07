'use client'
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

interface LibraryClientProps {
  libraryData: LibraryType[]
}

export default function LibraryClient({ libraryData }: LibraryClientProps) {
    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    const [searchResults, setSearchResults] = useState<LibraryType[]>([]);
    const [resultsFound, setResultsFound] = useState<boolean>(true);


    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
                <div className={`flex w-full justify-start mb-4`}>
                    <ReturnButton pathToReturn={routesAdaptive.media.root} />
                </div>
                <div className={`flex w-full justify-center gap-4 mb-4`}>
                    <span>{LibraryContent[locale].title}</span>
                </div>
                <div className={`flex w-full justify-center gap-4 mb-4`}>
                    <Search requestType={SEARCH_REQUEST_TYPE.TITLE} query={""} 
                    callBackResultAfterSearch={setSearchResults} arrayForSearch={libraryData} locale={locale}  setResultsFound={setResultsFound} />
                </div>
                <div className={`flex w-full justify-center pr-4 mb-4`}>
                    <CreateElementLibrary />
                </div>
                <div className={`flex flex-col gap-4 `}>
                        {resultsFound ? searchResults.map(item => (
                            <div key={item.id} className={`flex flex-col gap-2 p-4 bg-primary-color/50 rounded-large`}>
                                <span className={`text-2xl`}>{item.title[locale]}</span>                        
                                <span className={`text-sm italic`}>{LibraryContent[locale].type}:{item.type}</span>   
                                <HashTags hashTags={item.hashTags.length > 0 ? item.hashTags : ['depression']} type={SIZE_ELEMENT.SMALL} />
                                    <details key={item.id} className={`flex flex-col gap-2 p-4 bg-primary-color/50 rounded-large`}>
                                    
                                    <summary className={`font-bold cursor-pointer`}>Description</summary>
                                    <p>{item.content[locale]}</p>
                                </details>
                            </div>
                        )) : <span className={`text-lg`}>{LibraryContent[locale].notFoundElement}</span>}
                    </div>
            </div>
        </div>
    )
}
