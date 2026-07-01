import { SEARCH_TYPE } from "@/app/globalConsts/globalEnum";

interface SearchPageProps {
  params: Promise<{
    type: SEARCH_TYPE
    query: string
    locale: string
  }>
}

export default async function SearchPage({ params }: SearchPageProps) {
  const { type, query, locale } = await params;
  console.log('SearchPage params:', await params); // Log the params to the console for debugging
  return (
    <div>
        <h1>Search Page</h1>
        <p>Type: {type}</p>
        <p>Query: {query}</p>
        <p>Locale: {locale}</p>
    </div>
  )
}
