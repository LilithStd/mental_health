'use client'
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import { FaqContent } from "@/translate/faqPage/faqContent";
import FaqPageImagebackground from "@/public/images/background/greenLeaf.png";
import Image from "next/image";
import { useState } from "react";

export default function FaqPage() {
    const [isOpenFaqElement, setIsOpenFaqElement] = useState<number | null>(null);
    const locale = useLocale() as LocaleType
    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center overflow-hidden`}>

            <div className={`flex w-full flex-col flex-1 max-w-6xl relative  rounded-large bg-primary-color/20 p-4 `}>
                <Image src={FaqPageImagebackground} alt="FAQ Background" fill className="object-cover opacity-5" />
                <div className={`flex flex-col bg-primary-color/30 w-fit mx-auto rounded-large p-4 justify-center items-center relative z-10 mb-8`}>
                    <h2 className={`text-2xl font-bold `}>(F.A.Q)</h2>
                    <h2 className={`text-3xl font-bold `}>{FaqContent[locale].title}</h2>

                </div>
                <div className={`relative z-10`}>
                    {FaqContent[locale].listsQuestions.map((faq, index) => (
                        <details 
                            key={index}
                            onToggle={() => setIsOpenFaqElement(isOpenFaqElement === index ? null : index)}
                            className={`list-disc list-inside mb-4  bg-primary-color/20 p-4 rounded-large  hover:bg-primary-color/50 cursor-pointer ${isOpenFaqElement === index ? "backdrop-blur-md " : ""}`}>
                            <summary className={`font-bold`}>{faq.question}</summary>
                            <p className={`italic text-lg`}>{faq.answer}</p>
                        </details>
                    ))}
                </div>

            </div>
        </div>
    )
}
