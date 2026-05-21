import { getLocale } from "@/app/hooks/server/getLocale";
import { LocaleType } from "@/app/types/types";
import AddTagsIcon from "@/public/icons/PlusCircle.svg";
import { CreateArticleContent } from "@/translate/mediaPage/articleContent/articleContent";

export default async function HashTagAdd() {
    const locale = await getLocale() as LocaleType;
  return (
    <div className={`flex flex-col gap-4 bg-primary-color/30 border border-primary-color/30 p-2 rounded-large`}>
        <span>{CreateArticleContent[locale].tags}</span>
        <AddTagsIcon className="w-6 h-6" fill={'green'} />
    </div>
  )
}
