import ImageUpload from "@/app/components/articles/articleComponents/ImageUpload";
import HashTagAdd from "@/app/components/shared/createComponents/hashTagAdd";
import HashTags from "@/app/components/shared/hashTags";
import { getLocale } from "@/app/hooks/server/getLocale";
import { LocaleType } from "@/app/types/types";
import { CreateArticleContent } from "@/translate/mediaPage/articleContent/articleContent";
import { LibraryGroupElementType } from "@/translate/mediaPage/libraryContent/libraryContent";

export default async function CreateElementLibraryPage() {
    const locale = await getLocale() as LocaleType
  return (
    <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
            <form>
                <input name="title" type="text" placeholder="Title" className={`w-full p-2 mb-4 rounded-large bg-primary-color/50 border border-primary-color/30`} />
                <input name="description" type="text" placeholder="Description" className={`w-full p-2 mb-4 rounded-large bg-primary-color/50 border border-primary-color/30`} />
                <select name="locale" className={`w-1/10 p-2 mb-4 rounded-large bg-primary-color/50 border border-primary-color/30`}>
                    {LibraryGroupElementType.map(type => (
                        <option key={type.type} value={type.type}>{type[locale]}</option>
                    ))}
                </select>
                <div className={`flex gap-4 w-full`}>
                    <div className={`flex gap-2 mb-4 w-full`}>
                        <HashTagAdd />
                    </div>
                    <div className={`flex gap-2 mb-4 w-full`}>
                        <ImageUpload />
                    </div>
                </div>
               
                <textarea name="content" placeholder="Content" className={`w-full p-2 mb-4 rounded-large bg-primary-color/50 border border-primary-color/30`} rows={10}></textarea>
                <button type="submit" className={`px-4 py-2 bg-buttonContainer rounded-large font-bold`}>Create</button>
            </form>
            </div>
    </div>
  )
}
