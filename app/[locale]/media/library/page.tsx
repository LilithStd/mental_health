
import { getLocale } from "@/app/hooks/server/getLocale"
import { getAllLibrary } from "@/app/service/libraryService"
import { LocaleType } from "@/app/types/types"
import { LibraryContent } from "@/translate/mediaPage/libraryContent/libraryContent"



export default async function LibraryPage() {
    const locale = await getLocale() as LocaleType
    const library = await getAllLibrary()
    console.log(library);
  return (
    <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
        <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 pt-4`}>
        <div className={`flex w-full justify-center gap-4 mb-4`}>
            <span>{LibraryContent[locale].title}</span>
        </div>
            <div className={`flex flex-col gap-4`}>
                {library.map(item => (
                    <div key={item.id} className={`flex flex-col gap-2 p-4 bg-primary-color/50 rounded-large`}>
                        <h3 className={`text-2xl font-bold`}>{item.title[locale]}</h3>
                        <p>{item.description?.[locale]}</p>
                        <div className={`flex gap-2 flex-wrap`}>
                            {item.hashTags.map((tag, index) => (
                                <span key={index} className={`px-2 py-1 bg-secondary-color/50 rounded-full text-sm`}>#{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
