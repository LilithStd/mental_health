import Image from "next/image";
import { LINK_RAW_PATH } from "@/app/globalConsts/globalConsts";
import { getLocale } from "@/app/hooks/server/getLocale";
import { LocaleType } from "@/app/types/types";
import { ABOUT_PAGE_CONTENT } from "@/translate/aboutPage/aboutContent";

export default async function AboutPage() {
    const locale = await getLocale() as LocaleType;
  return  (
        <div className={`flex flex-col indents-main-container  flex-1 items-center `}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
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
                <Image src={LINK_RAW_PATH.butterflyBG} alt="Background Image" fill className="  w-full h-full z-0 object-cover rounded-large opacity-20" />
            </div>
            
        </div>
  )
}
