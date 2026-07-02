import { SEARCH_TYPE } from "@/app/globalConsts/globalEnum";
import { getLocale } from "@/app/hooks/server/getLocale";
import { LocaleType } from "@/app/types/types";

interface SearchPageProps {
  searchParams: Promise<{
    type: SEARCH_TYPE
    query: string
    locale: string
  }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { type, query} = await searchParams;
  const locale = await getLocale() as LocaleType;
  return (
    <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
      <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
        <div className={`flex justify-start items-center w-full flex-col flex-1 gap-4`}>
          <h1>Search Page</h1>
          <p>Type: {type}</p>
          <p>Query: {query}</p>
          <p>Locale: {locale}</p>
        </div>
      </div>  
    </div>
  )
}
