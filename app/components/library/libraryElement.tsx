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
console.log('LibraryElement props:', { id, type });

useEffect(() => {
    console.log('LibraryElement id:', id);
    // const fetchLibraryElement = () => {

    //         id.map((elementId) => {
    //             fetch(`/api/library?id=${elementId}`)
    //                 .then(response => response.json())
    //                 .then(data => {
    //                     console.log('Fetched library element:', data);
    //                     setLibraryElements(prevElements => [...prevElements, data]);
    //                 })
    //                 .catch(error => {
    //                     console.error('Error fetching library element:', error);
    //                 });
    //         })
    //     }
    

    // if (id) {
    //     fetchLibraryElement();
    // }
}, [id, type]);

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
