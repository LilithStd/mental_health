'use client';
import ConsultationForm from "@/app/components/consultation/consultationForm";
import AppImage from "@/app/components/shared/appImage";
import { UPLOAD_IMAGE_NAME } from "@/app/globalConsts/globalConsts";
import { CONSULTATION_TYPE, IMAGES_UPLOAD_PATH } from "@/app/globalConsts/globalEnum";
import { routes } from "@/app/helpers/helpersFunctions";
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import { CONSULTATION_TYPE_CONTENT, LINK_TO_CONSULTATION } from "@/translate/consultationPage/consultationPage";
import Link from "next/link";
import { useState } from "react";


export default function Consultation() {
    // methods
    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
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
                <button onClick={() => setMethodToConsult(CONSULTATION_TYPE.MAIN)} className={`bg-primary-color/50 rounded-large p-2`}>Main</button>
                <button onClick={() => setMethodToConsult(CONSULTATION_TYPE.ADDITIONAL)} className={`bg-primary-color/50 rounded-large p-2`}>Additional</button>
            </div>
        )
    }
    const additionalMethodComponent = () => {
        return <ConsultationForm />
    }
    const mainMethodComponent = () => {
        
        return (
            <div className={`grid grid-cols-2 gap-4 p-4 items-center`}>
                <AppImage type={IMAGES_UPLOAD_PATH.GLOBAL} imageName={ConsultationImage} width={400} height={400} alt="Consultation Image" className='rounded-large ' />
                <div>
                     <h2 className={`text-2xl`}>{CONSULTATION_TYPE_CONTENT.MAIN.title[locale]}</h2>
                    <p className={`text-center`}>{CONSULTATION_TYPE_CONTENT.MAIN.description[locale]}</p>
                    <Link  target="_blank" rel="noopener noreferrer" href={LINK_TO_CONSULTATION} className={`text-primary-color underline`}>{CONSULTATION_TYPE_CONTENT.MAIN.linkText[locale]}</Link>
                </div>
                
            </div>
        )
    }

    return (
        <div className={`flex flex-col indents-main-container  rounded-medium flex-1 items-center`}>
            <div className={`flex flex-col w-full  max-w-6xl bg-primary-color/20 border border-primary-color/20 rounded-large `}>
                 {methodToChangeTypeConsultationComponent()}
                {methodToConsult === CONSULTATION_TYPE.MAIN && mainMethodComponent()}
                {methodToConsult === CONSULTATION_TYPE.ADDITIONAL && additionalMethodComponent()}
            </div>
           
        </div>
    )
}
