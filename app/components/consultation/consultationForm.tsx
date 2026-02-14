'use client'
import { useGlobalStore } from "@/app/store/globalStore"
import { saveConsultation } from '@/app/serverActions/consultationStorage';
import { useRef } from "react";

export default function ConsultationForm() {
    // stores
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
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
        <div className={`flex flex-col w-full  max-w-6xl  rounded-medium bg-mainContainer `}>
            <form ref={ref} action={action} className={`mx-auto  border-2 p-4 items-center rounded-medium bg-subContainer max-content-main-container`}>
                <label className={`flex justify-center text-center mb-2`}>Contact Information</label>
                <div className={`flex gap-4 flex-col w-full items-center  h-full`}>
                    <div className={`flex items-center gap-2 w-1/2`}>
                        <div className={`flex flex-col  w-1/2`}>
                            <label htmlFor="name" className={`border-2 p-2 rounded-medium`}>Your Name:</label>
                            <label htmlFor="subject" className={`border-2 p-2 rounded-medium`}>Subject:</label>
                            <label htmlFor="email" className={`border-2 p-2 rounded-medium`}>Email:</label>
                            <label htmlFor="phone" className={`border-2 p-2 rounded-medium`}>Phone:</label>
                            <label htmlFor="date" className={`border-2 p-2 rounded-medium`}>Date:</label>
                        </div>
                        <div className={`flex flex-col  w-1/2`}>
                            <input id="name" name="name" placeholder="name" type="text" className={`border-2 p-2 bg-input rounded-medium`} />
                            <input id="subject" name="subject" placeholder="subject" type="text" className={`border-2 p-2 bg-input rounded-medium`} />
                            <input id="email" name="email" placeholder="email" type="text" className={`border-2 p-2 bg-input rounded-medium`} />
                            <input id="phone" name="phone" placeholder="phone" type="text" className={`border-2  p-2 bg-input rounded-medium`} />
                            <input id="date" name="date" placeholder="date" type="text" className={`border-2  p-2 bg-input rounded-medium`} />
                        </div>
                    </div>
                    <div className={`flex flex-col gap-2 w-1/2`}>
                        <textarea id="message" name="message" placeholder="message" className={`border-2 min-h-40 w-full h-full p-2 bg-input rounded-medium`} />
                    </div>
                </div>
                <div className={`flex justify-center w-full`}>
                    <button type="submit" className={`border-2  items-center mb-2 mt-2  w-1/2 rounded-medium p-2 bg-buttonContainer`}>Submit</button>
                </div>

            </form>
        </div>
    )
}
