'use client'
import { routes } from "@/app/helpers/helpersFunctions";
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import { TestsBlockContent } from "@/translate/mainPage/testsBlock";
import Link from "next/link";




export default function TestsBlock() {
    const locale = useLocale() as LocaleType;
    const routesAdaptive = routes(locale);
    return (

        <div className={`flex flex-col gap-4 p-6 justify-center items-center bg-primary-color/20 backdrop-blur-md rounded-large text-center`}>
            <h2 className={`text-5xl font-bold `}>{TestsBlockContent[locale].title}</h2>
            <p className={`italic text-lg`}>{TestsBlockContent[locale].description}</p>
            <Link href={routesAdaptive.tests.root} className={`mt-4 px-4 py-2 bg-buttonContainer rounded-large font-bold`}>{TestsBlockContent[locale].buttonText}</Link>
        </div>

    )
}
