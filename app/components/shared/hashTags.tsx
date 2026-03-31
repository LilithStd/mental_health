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
        <span className="text-primary-color font-bold">#{HASH_TAGS[locale].hashTags}</span>
        <div className={`flex w-full flex-wrap gap-2`}>
            {hashTags.map((tag, index) => (
                <span key={index} className={`flex items-center gap-1 bg-buttonContainer/50 p-2 rounded-large font-bold text-sm`}>
                    <HashTagIcon width={16} height={16} /> 
                    {tag}
                </span>
            ))}
        </div>
    </div>
  )
}
