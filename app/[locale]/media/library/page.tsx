import LibraryClient from "@/app/components/library/libraryClient"
import { getAllLibrary } from "@/app/service/libraryService"




export default async function LibraryPage() {
    const library = await getAllLibrary()

    return (
        <LibraryClient libraryData={library} />
  )
}
