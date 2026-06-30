
interface SearchPageProps {
  params: {
    type: string
    query: string
    locale: string
  }
}

export default function SearchPage({ params }: SearchPageProps) {
  return (
    <div>SearchPage</div>
  )
}
