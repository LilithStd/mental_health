'use client'

import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import { HASH_TAGS } from "@/translate/shared/hashTags";
import HashTagIcon from "@/public/icons/Tag.svg";

interface HashTagsProps {
    hashTags: string[]
}

export default function HashTags({ hashTags }: HashTagsProps) {
    const locale = useLocale() as LocaleType;
  return (
    <div>
        {/* <span className={`text-xs`}>#{HASH_TAGS[locale].hashTags}</span> */}
        <div className={`flex w-full text-xs flex-wrap gap-2`}>
            {hashTags.map((tag, index) => (
                <span key={index} className={`flex items-center gap-1 pl-2 pr-2 bg-buttonContainer/50  rounded-large`}>
                    <HashTagIcon width={8} height={8} /> 
                    {tag}
                </span>
            ))}
        </div>
    </div>
  )
}
