'use client'

import { LIBRARY_TYPE, SIZE_ELEMENT } from "@/app/globalConsts/globalEnum";
import { useLocale } from "@/app/hooks/useLocale";
import { LibraryType,  LocaleType } from "@/app/types/types";
import HashTags from "../shared/hashTags";
import { LibraryContent } from "@/translate/mediaPage/libraryContent/libraryContent";


interface LibraryElementProps {
    slugs: LibraryType[];
    id: string;
    type: LIBRARY_TYPE
}

export default function LibraryElement({ slugs, id, type }: LibraryElementProps) {
const locale = useLocale() as LocaleType
// const [libraryElements, setLibraryElements] = useState<LibraryType[]>(slugs);



return (
    <div className={`flex flex-col items-start justify-start w-full`}>
        <span className={`rounded-large p-2 m-2 bg-primary-color/20 border border-primary-color/30`}>{id}</span>
        <div className={`flex  flex-col w-full`}>
            {slugs.length > 0 ? slugs.map((element) => (
                <div key={element.id} className={`flex flex-col gap-2 p-4 bg-primary-color/50 rounded-large`}>
                                       <span className={`text-2xl`}>{element.title[locale]}</span>                        
                                       <span className={`text-sm italic`}>{LibraryContent[locale].type}:{element.type}</span>   
                                       <HashTags hashTags={element.hashTags.length > 0 ? element.hashTags : ['depression']} type={SIZE_ELEMENT.SMALL} />
                                           <details key={element.id} className={`flex flex-col gap-2 p-4 bg-primary-color/50 rounded-large`}>
                                           
                                           <summary className={`font-bold cursor-pointer`}>Description</summary>
                                           <p>{element.content[locale]}</p>
                                       </details>
                                   </div>
        )) : <div className={`flex flex-col gap-2 p-4 rounded-large`}>
                <p>No library elements found.</p>
            </div>}
        </div>
        
    </div>
  )
}
