import { LibraryTypes } from "@/app/models/library"

interface LibraryClientProps {
  libraryData: LibraryTypes[]
}

export default function LibraryClient({ libraryData }: LibraryClientProps) {
  return (
    <div>LibraryClient</div>
  )
}
