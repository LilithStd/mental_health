
import { getLocale } from "@/app/hooks/server/getLocale"
import { LocaleType } from "@/app/types/types"
import { LibraryContent } from "@/translate/mediaPage/libraryContent/libraryContent"



export default async function LibraryPage() {
    const locale = await getLocale() as LocaleType
  return (
    <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
        <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 pt-4`}>
        <div className={`flex w-full justify-center gap-4 mb-4`}>
            <span>{LibraryContent[locale].title}</span>
        </div>
            
        </div>
    </div>
  )
}
