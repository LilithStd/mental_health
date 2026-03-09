'use client'
import { routes } from "@/app/helpers/helpersFunctions";
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import { AboutConsultationContent } from "@/translate/mainPage/aboutConsultationBlock";
import Link from "next/link";



export default function AboutConsultation() {
    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    return (
        <div className={`flex flex-col gap-4 p-6 justify-center items-center`}>
            <h2 className={`text-2xl font-bold `}>{AboutConsultationContent[locale].TITLE}</h2>
            <p className={`mt-4`}>{AboutConsultationContent[locale].DESCRIPTION}</p>
            <h3 className={`text-xl font-semibold mt-4`}>{AboutConsultationContent[locale].TITLE_2}</h3>
            <ul className={`list-disc list-inside mt-2`}>
                {AboutConsultationContent[locale].BENEFITS.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                ))}
            </ul>
            <Link href={routesAdaptive.consultation.root} className={`mt-4 px-4 py-2 bg-buttonContainer rounded-large`}>{AboutConsultationContent[locale].SIGN_UP_BUTTON}</Link>
        </div>
    )
}
