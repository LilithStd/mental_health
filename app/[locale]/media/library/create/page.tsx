import ImageUpload from "@/app/components/articles/articleComponents/ImageUpload";
import HashTagAdd from "@/app/components/shared/createComponents/hashTagAdd";
import HashTags from "@/app/components/shared/hashTags";
import { LANGUAGE_APP } from "@/app/globalConsts/globalConsts";
import { LANGUAGE } from "@/app/globalConsts/globalEnum";
import { getLocale } from "@/app/hooks/server/getLocale";
import { LocaleType } from "@/app/types/types";
import { CreateArticleContent } from "@/translate/mediaPage/articleContent/articleContent";
import { LibraryContent, LibraryGroupElementType } from "@/translate/mediaPage/libraryContent/libraryContent";
import { HASH_TAGS } from "@/translate/shared/hashTags";

export default async function CreateElementLibraryPage() {
    const locale = await getLocale() as LocaleType
  return (
    <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg  border border-primary-color/30 p-4`}>
            <form>
                <fieldset className={`mb-4 border border-primary-color/30 rounded-large p-4`}>
                    <legend className={`text-lg font-bold`}>{LibraryContent[locale].createElement.title}</legend>
                    <input name="titleen" type="text" placeholder={LibraryContent[LANGUAGE.EN].createElement.title} className={`w-full p-2 mb-4 rounded-large bg-primary-color/50 border border-primary-color/30`} />
                    <input name="titlelv" type="text" placeholder={LibraryContent[LANGUAGE.LV].createElement.title} className={`w-full p-2 mb-4 rounded-large bg-primary-color/50 border border-primary-color/30`} />
                    <input name="titleru" type="text" placeholder={LibraryContent[LANGUAGE.RU].createElement.title} className={`w-full p-2 mb-4 rounded-large bg-primary-color/50 border border-primary-color/30`} />
                </fieldset>
                <fieldset className={`mb-4 border border-primary-color/30 rounded-large p-4`}>
                    <legend className={`text-lg font-bold`}>{LibraryContent[locale].createElement.description}</legend>
                    <input name="descriptionen" type="text" placeholder={LibraryContent[LANGUAGE.EN].createElement.description} className={`w-full p-2 mb-4 rounded-large bg-primary-color/50 border border-primary-color/30`} />
                <input name="descriptionlv" type="text" placeholder={LibraryContent[LANGUAGE.LV].createElement.description} className={`w-full p-2 mb-4 rounded-large bg-primary-color/50 border border-primary-color/30`} />
                <input name="descriptionru" type="text" placeholder={LibraryContent[LANGUAGE.RU].createElement.description} className={`w-full p-2 mb-4 rounded-large bg-primary-color/50 border border-primary-color/30`} />
                </fieldset>
                <fieldset className={`mb-4 border border-primary-color/30 rounded-large p-4`}>
                    <legend className={`text-lg font-bold`}>{LibraryContent[locale].createElement.content}</legend>
                    <textarea name="contenten" placeholder={LibraryContent[LANGUAGE.EN].createElement.content} className={`w-full p-2 mb-4 rounded-large bg-primary-color/50 border border-primary-color/30`} rows={4}></textarea>
                    <textarea name="contentlv" placeholder={LibraryContent[LANGUAGE.LV].createElement.content} className={`w-full p-2 mb-4 rounded-large bg-primary-color/50 border border-primary-color/30`} rows={4}></textarea>
                    <textarea name="contentru" placeholder={LibraryContent[LANGUAGE.RU].createElement.content} className={`w-full p-2 mb-4 rounded-large bg-primary-color/50 border border-primary-color/30`} rows={4}></textarea>
                </fieldset>
                <fieldset className={` mb-4 gap-2 flex flex-col border border-primary-color/30 rounded-large p-4`}>
                    <legend className={`text-lg font-bold`}>{LibraryContent[locale].createElement.indentification}</legend>
                    <div className={`flex gap-4 w-full`}>
                        <fieldset className={`flex flex-col w-1/2 mb-4 border border-primary-color/30 rounded-large p-4`}>
                            <legend className={`text-lg font-bold`}>{LibraryContent[locale].createElement.slug}</legend>
                            <input name="slug" type="text" placeholder={LibraryContent[locale].createElement.slugExample} className={`w-full p-2 mb-4 rounded-large bg-primary-color/50 border border-primary-color/30`} />
                        </fieldset>
                        <fieldset className={`flex flex-col w-1/2 mb-4 border border-primary-color/30 rounded-large p-4`}>
                            <legend className={`text-lg font-bold`}>{LibraryContent[locale].type}</legend>
                            <select name="locale" className={`w-1/2 p-2 mb-4 rounded-large bg-primary-color/50 border border-primary-color/30`}>
                                {LibraryGroupElementType.map(type => (
                                    <option key={type.type} value={type.type}>{type[locale]}</option>
                                ))}
                            </select>
                        </fieldset>
                    </div>
                        
                        <div className={`flex gap-2 mb-4 w-full`}>
                            <HashTagAdd />
                        </div>
                </fieldset>
                

                <div className={`flex gap-4 w-full`}>
          
                    <div className={`flex gap-2 mb-4 min-h-[100px] w-full`}>
                        <ImageUpload />
                    </div>
                </div>
                
                <div className={`flex items-center justify-center gap-4 mb-4 w-full`}>
                    <button type="submit" className={`px-4 py-2 rounded-large bg-primary-color/50 border border-primary-color/30`}>{LibraryContent[locale].createElement.saveButton}</button>
                    <button type="reset" className={`px-4 py-2 rounded-large bg-primary-color/50 border border-primary-color/30`}>{LibraryContent[locale].createElement.cancelButton}</button>
                </div>
            </form>
            </div>
    </div>
  )
}
