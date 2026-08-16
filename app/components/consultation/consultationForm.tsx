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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        const res = await fetch("/api/sendEmail", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        if (data.success) {
            alert("Отправлено!");
            ref.current?.reset()
        }
        };

    return (
       
            <form ref={ref} onSubmit={handleSubmit} className={`mx-auto  p-4 items-center rounded-large  max-content-main-container`}>
                <label className={`flex justify-center text-3xl text-center mb-2`}>{ConsultationPageContent[locale].title}</label>
                <div className={`flex gap-4 flex-col w-full items-center h-full`}>
                    <div className={`flex items-center gap-2 w-1/2`}>
                        <div className={`flex flex-col gap-4 w-full`}>
                            <label className={` p-2 rounded-large flex flex-col`}>
                                <span className={`font-bold`}>{ConsultationPageContent[locale].name}:</span>
                                <input name="name" required placeholder="John Doe" type="text" className={`p-4 bg-input rounded-large h-15`} />
                            </label>
                            <label className={` p-2 rounded-large flex flex-col`}>
                                <span className={`font-bold`}>{ConsultationPageContent[locale].subject}:</span>
                                <input name="subject" required placeholder="Subject" type="text" className={` p-4 bg-input rounded-large h-15`} />
                            </label>
                            <label className={` p-2 rounded-large flex flex-col`}>
                                <span className={`font-bold`}>{ConsultationPageContent[locale].email}:</span>
                                <input name="email" required placeholder="email@example.com" type="email" className={` p-4 bg-input rounded-large h-15`} />
                            </label>
                            <label className={` p-2 rounded-large flex flex-col`}>
                                <span className={`font-bold`}>{ConsultationPageContent[locale].phone}:</span>
                                <input name="phone" required placeholder="(123) 456-7890" type="tel" className={` p-4 bg-input rounded-large h-15`} />
                            </label>
                            <label className={` p-2 rounded-large flex flex-col`}>
                                <span className={`font-bold`}>{ConsultationPageContent[locale].date}:</span>
                                <input name="date" required placeholder="MM/DD/YYYY" type="date" className={` p-4 bg-input rounded-large h-15`} />
                            </label>
                        </div>
                    </div>
                    <label className={`flex flex-col gap-2 w-1/2`}>
                        <span className={`font-bold`}>{ConsultationPageContent[locale].message}*:</span>
                        <textarea id="message" required name="message" placeholder={ConsultationPageContent[locale].message} className={` min-h-40 w-full h-full p-4 bg-input rounded-large`} />
                    </label>
                </div>
                <div className={`flex justify-center m-4`}>
                    <button type="submit" className={`p-4 w-fit bg-primary-color/10 backdrop-blur-md border border-primary-color/12 font-poiret shadow-lg z-10 font-bold italic rounded-full hover:bg-primary-color/40 hover:scale-105`}>{ConsultationPageContent[locale].buttonText}</button>
                </div>

            </form>
        
    )
}
