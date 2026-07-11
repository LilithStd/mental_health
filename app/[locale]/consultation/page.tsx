'use client';
import ConsultationForm from "@/app/components/consultation/consultationForm";
import AppImage from "@/app/components/shared/appImage";
import { LINK_RAW_PATH, UPLOAD_IMAGE_NAME } from "@/app/globalConsts/globalConsts";
import { CONSULTATION_TYPE, IMAGES_UPLOAD_PATH } from "@/app/globalConsts/globalEnum";
import { routes } from "@/app/helpers/helpersFunctions";
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import { CONSULTATION_TYPE_CONTENT, LINK_TO_CONSULTATION } from "@/translate/consultationPage/consultationPage";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export default function Consultation() {
    // methods
    const locale = useLocale() as LocaleType
    // const routesAdaptive = routes(locale)
    // stores
    // consts
    const ConsultationImage = UPLOAD_IMAGE_NAME.global.consultation.consultationPage
    // functions

    // states
    const [methodToConsult, setMethodToConsult] = useState(CONSULTATION_TYPE.MAIN)
    // components
    const methodToChangeTypeConsultationComponent = () => {

        return (
            <div className={`flex gap-4 p-4 justify-center`}>
               
                
            </div>
        )
    }
    const additionalMethodComponent = () => {
        return (
            <div>
                <div className={`flex flex-col gap-4 justify-center items-center`}>
                    <button onClick={() => setMethodToConsult(CONSULTATION_TYPE.MAIN)} className={`bg-primary-color/50 rounded-large p-2`}>Return</button>
                </div>
                 
                 <ConsultationForm />
            </div>
            
        )
    }
    const mainMethodComponent = () => {
        
        return (
            <div className={`grid grid-cols-[0.8fr_1fr] gap-4 p-4 items-center`}>
                <AppImage type={IMAGES_UPLOAD_PATH.GLOBAL} imageName={ConsultationImage} width={600} height={600} alt="Consultation Image" className='rounded-large' />
                <div>
                    <div className={`flex  justify-center items-center`}>
                        <p className={``}>{CONSULTATION_TYPE_CONTENT.MAIN.description[locale]}</p>
                        <Link  target="_blank" rel="noopener noreferrer" href={LINK_TO_CONSULTATION} className={`ml-2 text-primary-color underline`}>{CONSULTATION_TYPE_CONTENT.MAIN.linkText[locale]}</Link>
                    </div>
                    <div className={`flex gap-4 justify-center items-center`}>
                        <p className={``}>{CONSULTATION_TYPE_CONTENT.ADDITIONAL.description[locale]}</p>
                        <button onClick={() => setMethodToConsult(CONSULTATION_TYPE.ADDITIONAL)} className={`bg-primary-color/50 rounded-large p-2`}>Additional</button>
                    </div>

                </div>
                
            </div>
        )
    }

    return (
        <div className={`flex flex-col indents-main-container  rounded-medium flex-1 items-center`}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
                 {methodToChangeTypeConsultationComponent()}
                {methodToConsult === CONSULTATION_TYPE.MAIN && mainMethodComponent()}
                {methodToConsult === CONSULTATION_TYPE.ADDITIONAL && additionalMethodComponent()}
                <Image src={LINK_RAW_PATH.butterflyBG} alt="Background Image" fill className="  w-full h-full z-0 object-cover rounded-large opacity-20" />
            </div>
           
        </div>
    )
}
