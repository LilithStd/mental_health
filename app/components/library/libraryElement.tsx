'use client'

import { LIBRARY_TYPE } from "@/app/globalConsts/globalEnum";
import { useLocale } from "@/app/hooks/useLocale";
import { LibraryType,  LocaleType } from "@/app/types/types";
import { useEffect, useState } from "react"

interface LibraryElementProps {
    slugs: LibraryType[];
    type: LIBRARY_TYPE
}

export default function LibraryElement({ slugs, type }: LibraryElementProps) {
const locale = useLocale() as LocaleType
const [libraryElements, setLibraryElements] = useState<LibraryType[]>(slugs);



return (
    <div>
        {libraryElements.length > 0 ? libraryElements.map((element) => (
            <div key={element.id}>
                <h2>{element.title[locale]}</h2>
                <p>{element.content[locale]}</p>
                {/* Render other properties of the library element as needed */}
            </div>
        )) : <p>No library elements found.</p>}
    </div>
  )
}
