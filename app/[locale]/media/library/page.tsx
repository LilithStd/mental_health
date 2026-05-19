
import CreateElementLibrary from "@/app/components/library/createElementLibrary"
import { getLocale } from "@/app/hooks/server/getLocale"
import { getAllLibrary } from "@/app/service/libraryService"
import { LocaleType } from "@/app/types/types"
import { LibraryContent } from "@/translate/mediaPage/libraryContent/libraryContent"



export default async function LibraryPage() {
    const locale = await getLocale() as LocaleType
    const library = await getAllLibrary()

  return (
    <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
        <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 pt-4`}>
        <div>
            <CreateElementLibrary />
        </div>
        <div className={`flex w-full justify-center gap-4 mb-4`}>
            <span>{LibraryContent[locale].title}</span>
        </div>
            <div className={`flex flex-col gap-4 p-4`}>
                {library.map(item => (
                    <div key={item.id} className={`flex flex-col gap-2 p-4 bg-primary-color/50 rounded-large`}>
                        <span className={`text-sm italic`}>{LibraryContent[locale].type}:{item.type}</span>
                            <details key={item.id} className={`flex flex-col gap-2 p-4 bg-primary-color/50 rounded-large`}>
                            <summary className={`text-2xl font-bold cursor-pointer`}>{item.title[locale]}</summary>
                            <p>{item.content[locale]}</p>
                         </details>
                    </div>
           
                    
                ))}
            </div>
        </div>
    </div>
  )
}
