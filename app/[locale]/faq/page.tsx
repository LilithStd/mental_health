'use client'
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import { FaqContent } from "@/translate/faqPage/faqContent";
import FaqPageImagebackground from "@/public/images/background/greenLeaf.png";
import Image from "next/image";

export default function FaqPage() {
    const locale = useLocale() as LocaleType
    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center overflow-hidden`}>

            <div className={`flex w-full flex-col flex-1 max-w-6xl relative  rounded-large bg-mainContainer p-4 `}>
                <Image src={FaqPageImagebackground} alt="FAQ Background" fill className="object-cover opacity-20" />
                <div className={`flex flex-col bg-subContainer w-fit mx-auto rounded-large p-4 justify-center items-center relative z-10 mb-8`}>
                    <h2 className={`text-2xl font-pattaya font-bold `}>(F.A.Q)</h2>
                    <h2 className={`text-5xl font-pattaya font-bold `}>{FaqContent[locale].title}</h2>

                </div>
                <div className={`relative z-10`}>
                    {FaqContent[locale].listsQuestions.map((faq, index) => (
                        <details key={index} className={`list-disc list-inside mb-4 bg-subContainer p-4 rounded-large hover:bg-hover cursor-pointer `}>
                            <summary className={`font-jura font-bold`}>{faq.question}</summary>
                            <p className={`font-poiret font-bold italic text-lg`}>{faq.answer}</p>
                        </details>
                    ))}
                </div>

            </div>
        </div>
    )
}
