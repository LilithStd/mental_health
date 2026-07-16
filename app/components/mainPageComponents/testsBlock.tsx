'use client'
import { routes } from "@/app/helpers/helpersFunctions";
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import { TestsBlockContent } from "@/translate/mainPage/testsBlock";
import Link from "next/link";
import Image from "next/image";
import AppImage from "../shared/appImage";
import { IMAGES_UPLOAD_PATH } from "@/app/globalConsts/globalEnum";
import { LINK_RAW_PATH, UPLOAD_IMAGE_NAME } from "@/app/globalConsts/globalConsts";





export default function TestsBlock() {
    const locale = useLocale() as LocaleType;
    const routesAdaptive = routes(locale);
    return (

        <div className={`flex gap-4 p-6 justify-around items-center bg-primary-color/20 backdrop-blur-md rounded-large text-center border border-primary-color/30 shadow-lg`}>
           

            
            <div className={`flex flex-col ml-4 gap-4 justify-center items-center text-center`}>
                <h2 className={`text-5xl font-bold `}>{TestsBlockContent[locale].title}</h2>
                <p className={`italic text-lg`}>{TestsBlockContent[locale].description}</p>
                <Link href={routesAdaptive.tests.root} className={`p-4 w-fit bg-primary-color/40 backdrop-blur-md border border-primary-color/50 font-geistSans shadow-lg z-10 font-bold italic rounded-full hover:bg-accentElement hover:scale-105`}>{TestsBlockContent[locale].buttonText}</Link>
            </div>
            <AppImage width={300} height={300} imageName={UPLOAD_IMAGE_NAME.global.mainPage.tests.butterFlyViolet} alt="Test Butterfly" type={IMAGES_UPLOAD_PATH.GLOBAL}/>
            <Image src={LINK_RAW_PATH.butterflyBG} alt="Background Image" fill className="z-0  w-full h-full object-cover rounded-large opacity-40" />
        </div>

    )
}
