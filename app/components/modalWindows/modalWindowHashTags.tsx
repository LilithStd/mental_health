import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import { HASH_TAGS } from "@/translate/shared/hashTags";
import AddTagsIcon from "@/public/icons/PlusCircle.svg";

export default function ModalWindowHashTags() {
  const locale = useLocale() as LocaleType;

  return (
    <div className={`absolute flex flex-col backdrop-blur-xl  shadow-md  rounded-large  bg-primary-color/10 border border-primary-color/30 p-4 left-2 min-h-30 top-18 w-[400px] z-50`}>
        <h2 className="text-lg font-bold">#{HASH_TAGS[locale].hashTags}</h2>
        <div className="flex gap-2 mt-4">
            <div className={`flex items-center gap-2 bg-primary-color/30 border border-primary-color/40 p-2 rounded-large`}>
              <span className={`text-[12px]`}>{HASH_TAGS[locale].availableHashTags}</span>
            </div>          
            <div className={`flex items-center gap-2 bg-primary-color/30 border border-primary-color/40 p-2 rounded-large`}>
              <span className={`text-sm`}>{HASH_TAGS[locale].addHashTag}</span>
                <AddTagsIcon className={`w-6 h-6 cursor-pointer hover:scale-110 transition-transform`} fill={'green'} onClick={() => {}} />
            </div>
            <div className={`flex items-center gap-2 bg-primary-color/30 border border-primary-color/40 p-2 rounded-large`}>
              <span className={`text-sm`}>{HASH_TAGS[locale].deleteHashTag}</span>
            </div>
        </div>
    </div>
  )
}
