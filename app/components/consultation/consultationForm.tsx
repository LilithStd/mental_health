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
    const testSend = async (e: React.FormEvent) => {
        e.preventDefault();

            const res = await fetch("/api/sendEmail", {
                method: "POST",
                body: JSON.stringify({
                name: "John Doe",
                email: "john.doe@example.com",
                message: "This is a test message.",
                }),
            });

            const data = await res.json();

            if (data.success) {
                alert("Отправлено!");
            }
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
        }
        };

    return (
        <div className={`flex flex-col w-full  max-w-6xl  rounded-large `}>
            <form ref={ref} action={action} className={`mx-auto  p-4 items-center rounded-large bg-primary-color/20 border border-primary-color/20 shadow-md max-content-main-container`}>
                <label className={`flex justify-center text-3xl font-pattaya text-center mb-2`}>{ConsultationPageContent[locale].title}</label>
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
                    <button type="submit" className={`font-bold items-center mb-2 mt-2  w-1/4  rounded-large p-4 bg-buttonContainer`}>{ConsultationPageContent[locale].buttonText}</button>
                </div>

            </form>
            <button onClick={testSend}>test send</button>
        </div>
    )
}
