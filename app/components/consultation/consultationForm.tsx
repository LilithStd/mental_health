'use client'

import { saveConsultation } from '@/app/serverActions/consultationStorage';
import { useRef } from "react";
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import { ConsultationPageContent } from '@/translate/consultationPage/consultationPage';

export default function ConsultationForm() {
    // stores
    const locale = useLocale() as LocaleType
    // 
    //functions
    const ref = useRef<HTMLFormElement>(null)

    async function action(formData: FormData) {
        await saveConsultation(formData)
        ref.current?.reset()
        alert('Request sent!')
    }
    // 

    return (
        <div className={`flex flex-col w-full  max-w-6xl  rounded-large bg-mainContainer `}>
            <form ref={ref} action={action} className={`mx-auto  p-4 items-center rounded-large bg-subContainer max-content-main-container`}>
                <label className={`flex justify-center text-center mb-2`}>{ConsultationPageContent[locale].title}</label>
                <div className={`flex gap-4 flex-col w-full items-center h-full`}>
                    <div className={`flex items-center gap-2 w-1/2`}>
                        <div className={`flex flex-col gap-4 w-full`}>
                            <label className={` p-2 rounded-large flex flex-col`}>
                                <span className={``}>{ConsultationPageContent[locale].name}:</span>
                                <input name="name" placeholder="John Doe" type="text" className={`p-4 bg-input rounded-large h-15`} />
                            </label>
                            <label className={` p-2 rounded-large flex flex-col`}>
                                <span className={``}>{ConsultationPageContent[locale].subject}:</span>
                                <input name="subject" placeholder="Subject" type="text" className={` p-4 bg-input rounded-large h-15`} />
                            </label>
                            <label className={` p-2 rounded-large flex flex-col`}>
                                <span className={``}>{ConsultationPageContent[locale].email}:</span>
                                <input name="email" placeholder="email@example.com" type="text" className={` p-4 bg-input rounded-large h-15`} />
                            </label>
                            <label className={` p-2 rounded-large flex flex-col`}>
                                <span className={``}>{ConsultationPageContent[locale].phone}:</span>
                                <input name="phone" placeholder="(123) 456-7890" type="text" className={` p-4 bg-input rounded-large h-15`} />
                            </label>
                            <label className={` p-2 rounded-large flex flex-col`}>
                                <span className={``}>{ConsultationPageContent[locale].date}:</span>
                                <input name="date" placeholder="MM/DD/YYYY" type="text" className={` p-4 bg-input rounded-large h-15`} />
                            </label>
                        </div>
                    </div>
                    <label className={`flex flex-col gap-2 w-1/2`}>
                        <span className={``}>{ConsultationPageContent[locale].message}*:</span>
                        <textarea id="message" name="message" placeholder={ConsultationPageContent[locale].message} className={` min-h-40 w-full h-full p-4 bg-input rounded-large`} />
                    </label>
                </div>
                <div className={`flex justify-center m-4`}>
                    <button type="submit" className={` items-center mb-2 mt-2  w-1/4  rounded-large p-4 bg-buttonContainer`}>{ConsultationPageContent[locale].buttonText}</button>
                </div>

            </form>
        </div>
    )
}
