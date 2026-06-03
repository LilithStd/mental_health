'use client'

import { LIBRARY_TYPE } from "@/app/globalConsts/globalEnum";
import { useLocale } from "@/app/hooks/useLocale";
import { LibraryType,  LocaleType } from "@/app/types/types";
import { useEffect, useState } from "react"

interface LibraryElementProps {
    id: string[]
    type: LIBRARY_TYPE
}

export default function LibraryElement({ id, type }: LibraryElementProps) {
const locale = useLocale() as LocaleType
const [libraryElements, setLibraryElements] = useState<LibraryType[]>([]);


useEffect(() => {
    console.log('LibraryElement id:', id);
    const fetchLibraryElement = () => {
        fetch(`/api/library/${id}`)
            .then(response => response.json())
            .then((data: LibraryType) => {
                setLibraryElements(prevElements => [...prevElements, data]);
            })
            .catch(error => {
                console.error('Error fetching library element:', error);
            });
    };

    if (id) {
        fetchLibraryElement();
    }
}, [id]);

return (
    <div>
        {libraryElements.map((element) => (
            <div key={element.id}>
                <h2>{element.title[locale]}</h2>
                <p>{element.content[locale]}</p>
                {/* Render other properties of the library element as needed */}
            </div>
        ))}
    </div>
  )
}
