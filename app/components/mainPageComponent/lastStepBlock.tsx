'use client'
import Image from "next/image"
import lastStepBg from "@/public/images/problems/problem_human.png"
import Link from "next/link"
import { routes } from "@/app/helpers/helpersFunctions"
import { LocaleType } from "@/app/types/types"
import { useLocale } from "@/app/hooks/useLocale"
import { LastStepBlockContent } from "@/translate/mainPage/lastStepBlock"


export default function LastStepBlock() {
    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    return (
        <div className={`flex flex-col gap-4 p-6 justify-center items-center`}>
            <div className={`flex flex-col gap-4 p-6 justify-center items-center`}>
                <h2 className={`text-2xl font-bold `}>{LastStepBlockContent[locale].title}</h2>
                <p className={`mt-4`}>{LastStepBlockContent[locale].description}</p>
                <Link href={routesAdaptive.consultation.root} className={`mt-4 px-4 py-2 bg-buttonContainer cursor-pointer rounded-large`}>{LastStepBlockContent[locale].button}</Link>
            </div>
            <Image src={lastStepBg} alt="Last Step Background" className='cover  rounded-large' />
        </div>
    )
}
