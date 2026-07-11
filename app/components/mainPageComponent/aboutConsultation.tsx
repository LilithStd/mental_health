'use client'
import { routes } from "@/app/helpers/helpersFunctions";
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import { AboutConsultationContent } from "@/translate/mainPage/aboutConsultationBlock";
import Link from "next/link";
import Image from "next/image";
import CheckIcon from "@/public/icons/Check.svg";
import { IMAGES_UPLOAD_PATH } from "@/app/globalConsts/globalEnum";
import AppImage from "../shared/appImage";
import { LINK_RAW_PATH, UPLOAD_IMAGE_NAME } from "@/app/globalConsts/globalConsts";


export default function AboutConsultation() {
    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    const HelpingAbstractImage  = UPLOAD_IMAGE_NAME.global.mainPage.aboutConsultation
    return (
        <div className={`grid grid-cols-2 gap-4 p-6 justify-center items-center bg-primary-color/20 backdrop-blur-md rounded-large text-center border border-primary-color/30 shadow-lg`}>
            <div className={`flex justify-center items-center`}>
                <AppImage type={IMAGES_UPLOAD_PATH.GLOBAL} imageName={HelpingAbstractImage} width={1280} height={1024} alt="Helping Abstract" className='rounded-large scale-170' />
            </div>
            <div className={`flex flex-col gap-4 p-6 justify-center items-center text-left`}>
                <h2 className={`text-3xl font-bold `}>{AboutConsultationContent[locale].TITLE}</h2>
                <p className={`italic`}>{AboutConsultationContent[locale].DESCRIPTION}</p>
                <div className={`flex flex-col gap-4 justify-center items-center bg-primary-color/10 rounded-large p-4 border border-primary-color/30 w-full`}>
                    <h3 className={`text-2xl font-semibold mt-4`}>{AboutConsultationContent[locale].TITLE_2}</h3>
                    <ul className={`list-disc list-inside font-bold`}>
                    {AboutConsultationContent[locale].BENEFITS.map((benefit, index) => (
                        <li key={index} className={`flex  items-center gap-2`}>
                            <CheckIcon alt="Check Icon" className={`bg-primary-color/40 rounded-full p-2 w-8 h-8`} />
                            {benefit}
                        </li>
                        ))}
                    </ul>
                </div>
                
                <Link href={routesAdaptive.consultation.root} className={`mt-4 px-4 py-2 font-bold bg-buttonContainer rounded-large`}>{AboutConsultationContent[locale].SIGN_UP_BUTTON}</Link>
            </div>
            <Image src={LINK_RAW_PATH.butterflyBG} alt="Background Image" fill className="  w-full h-full z-0 object-cover rounded-large opacity-20" />

        </div>
    )
}
