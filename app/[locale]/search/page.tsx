import { SEARCH_TYPE } from "@/app/globalConsts/globalEnum";

interface SearchPageProps {
  params: {
    type: SEARCH_TYPE
    query: string
    locale: string
  }
}

export default async function SearchPage({ params }: SearchPageProps) {
    const { type, query, locale } = await params;
  return (
    <div>
        <h1>Search Page</h1>
        <p>Type: {type}</p>
        <p>Query: {query}</p>
        <p>Locale: {locale}</p>
    </div>
  )
}
