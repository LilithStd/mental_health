
import CreateElementLibrary from "@/app/components/library/createElementLibrary"
import LibraryClient from "@/app/components/library/libraryClient"
import ReturnButton from "@/app/components/returnButton"
import HashTags from "@/app/components/shared/hashTags"
import Search from "@/app/components/shared/search"
import { SEARCH_REQUEST_TYPE, SIZE_ELEMENT } from "@/app/globalConsts/globalEnum"
import { routes } from "@/app/helpers/helpersFunctions"
import { getLocale } from "@/app/hooks/server/getLocale"
import { Library } from "@/app/models/library"
import { getAllLibrary } from "@/app/service/libraryService"
import { LocaleType } from "@/app/types/types"
import { LibraryContent } from "@/translate/mediaPage/libraryContent/libraryContent"



export default async function LibraryPage() {
    const locale = await getLocale() as LocaleType
    const library = await getAllLibrary()
    const routesAdaptive = routes(locale)

  return (
    <LibraryClient libraryData={library} />
  )
}
