
import CreateElementLibrary from "@/app/components/library/createElementLibrary"
import ReturnButton from "@/app/components/returnButton"
import HashTags from "@/app/components/shared/hashTags"
import Search from "@/app/components/shared/search"
import { SEARCH_REQUEST_TYPE, SIZE_ELEMENT } from "@/app/globalConsts/globalEnum"
import { routes } from "@/app/helpers/helpersFunctions"
import { getLocale } from "@/app/hooks/server/getLocale"
import { getAllLibrary } from "@/app/service/libraryService"
import { LocaleType } from "@/app/types/types"
import { LibraryContent } from "@/translate/mediaPage/libraryContent/libraryContent"



export default async function LibraryPage() {
    const locale = await getLocale() as LocaleType
    const library = await getAllLibrary()
    const routesAdaptive = routes(locale)

  return (
    <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
        <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
            <div className={`flex w-full justify-start mb-4`}>
                <ReturnButton pathToReturn={routesAdaptive.media.root} />
            </div>
            <div className={`flex w-full justify-center gap-4 mb-4`}>
                <span>{LibraryContent[locale].title}</span>
            </div>
            {/* <div className={`flex w-full justify-center gap-4 mb-4`}>
                <Search requestType={SEARCH_REQUEST_TYPE.TITLE} query={""} callBackResultAfterSearch={function (results: typeof library): void {
                    console.log('Search results:', results);
                }} arrayForSearch={library} locale={locale} />
            </div> */}
            <div className={`flex w-full justify-center pr-4 mb-4`}>
                <CreateElementLibrary />
            </div>
            <div className={`flex flex-col gap-4 `}>
                    {library.map(item => (
                        <div key={item.id} className={`flex flex-col gap-2 p-4 bg-primary-color/50 rounded-large`}>
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
        </div>
    </div>
  )
}
