'use client'
import { routes } from "@/app/helpers/helpersFunctions";
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import { TestsBlockContent } from "@/translate/mainPage/testsBlock";
import Link from "next/link";
import AppImage from "../shared/appImage";
import { IMAGES_UPLOAD_PATH } from "@/app/globalConsts/globalEnum";
import { UPLOAD_IMAGE_NAME } from "@/app/globalConsts/globalConsts";




export default function TestsBlock() {
    const locale = useLocale() as LocaleType;
    const routesAdaptive = routes(locale);
    return (

        <div className={`flex flex-col gap-4 p-6 justify-center items-center bg-primary-color/20 backdrop-blur-md rounded-large text-center border border-primary-color/30 shadow-lg`}>
            <AppImage width={300} height={300} imageName={UPLOAD_IMAGE_NAME.global.mainPage.tests.butterFlyViolet} alt="Test Butterfly" type={IMAGES_UPLOAD_PATH.GLOBAL}/>
            <h2 className={`text-5xl font-bold `}>{TestsBlockContent[locale].title}</h2>
            <p className={`italic text-lg`}>{TestsBlockContent[locale].description}</p>
            <Link href={routesAdaptive.tests.root} className={`mt-4 px-4 py-2 bg-buttonContainer rounded-large font-bold`}>{TestsBlockContent[locale].buttonText}</Link>
        </div>

    )
}
