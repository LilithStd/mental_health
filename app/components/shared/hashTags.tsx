'use client'

import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import { HASH_TAGS } from "@/translate/shared/hashTags";

interface HashTagsProps {
    hashTags: string[]
}

export default function HashTags({ hashTags }: HashTagsProps) {
    const locale = useLocale() as LocaleType;
  return (
    <div>
        <span className="text-primary-color font-bold">#{HASH_TAGS[locale].hashTags}</span>
    </div>
  )
}
