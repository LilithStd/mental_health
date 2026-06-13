import { getLocale } from "@/app/hooks/server/getLocale";
import { LocaleType } from "@/app/types/types";
import { ABOUT_PAGE_CONTENT } from "@/translate/aboutPage/aboutContent";

export default async function AboutPage() {
    const locale = await getLocale() as LocaleType;
  return  (
        <div className={`flex flex-col indents-main-container  flex-1 items-center `}>
            <div className={`flex flex-col flex-1 max-w-6xl border border-primary-color/30 rounded-large bg-primary-color/20 p-4 shadow-lg w-full`}>
                <div className={`flex w-full flex-col flex-1  rounded-large`}>
                    <h2 className={`text-5xl justify-center text-center font-bold`}>{ABOUT_PAGE_CONTENT[locale].title}</h2>
                    <p className={`text-center mt-2`}>{ABOUT_PAGE_CONTENT[locale].description}</p>
                </div>
                <div className={`flex w-full flex-col flex-1 mt-6 rounded-large`}>
                    <h2 className={`text-3xl justify-center text-center font-bold`}>{ABOUT_PAGE_CONTENT[locale].contact.title}</h2>
                    <p className={`text-center mt-2`}>{ABOUT_PAGE_CONTENT[locale].contact.phone}</p>
                    <p className={`text-center mt-2`}>{ABOUT_PAGE_CONTENT[locale].contact.email}</p>
                    <p className={`text-center mt-2`}>{ABOUT_PAGE_CONTENT[locale].contact.address}</p>
                </div>
            </div>
            
        </div>
  )
}
