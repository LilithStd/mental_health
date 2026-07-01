'use client'

import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import { HASH_TAGS } from "@/translate/shared/hashTags";
import HashTagIcon from "@/public/icons/Tag.svg";
import { SEARCH_TYPE, SIZE_ELEMENT } from "@/app/globalConsts/globalEnum";
import { routes } from "@/app/helpers/helpersFunctions";
import Link from "next/link";

interface HashTagsProps {
    hashTags: string[],
    type:SIZE_ELEMENT
}

export default function HashTags({ hashTags, type }: HashTagsProps) {
    const locale = useLocale() as LocaleType;
    const routesAdaptive = routes(locale)

    return (
        <div className={`flex w-full ${type === SIZE_ELEMENT.FULL ? 'text-md' : 'text-xs'} flex-wrap gap-2`}>
            {hashTags.map((tag, index) => (
                <Link key={index} className={`cursor-pointer flex items-center gap-1 pl-2 pr-2 bg-buttonContainer/50  rounded-large`} href={routesAdaptive.search.root + `?type=${SEARCH_TYPE.HASH_TAGS}&query=${tag}`}>
                <HashTagIcon width={ type === SIZE_ELEMENT.FULL ? 14 : 8} height={ type === SIZE_ELEMENT.FULL ? 14 : 8} /> 
                    {tag}
                </Link>
            ))}
        </div>
  )
}
