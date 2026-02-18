'use client'

import { saveConsultation } from '@/app/serverActions/consultationStorage';
import { useRef } from "react";

export default function ConsultationForm() {
    // stores

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
                <label className={`flex justify-center text-center mb-2`}>Contact Information</label>
                <div className={`flex gap-4 flex-col w-full items-center h-full`}>
                    <div className={`flex items-center gap-2 w-1/2`}>
                        <div className={`flex flex-col gap-4 w-full`}>
                            <label className={` p-2 rounded-large flex flex-col`}>
                                <span>Name:</span>
                                <input name="name" placeholder="John Doe" type="text" className={`p-2 bg-input rounded-large`} />
                            </label>
                            <label className={` p-2 rounded-large flex flex-col`}>
                                <span>Subject:</span>
                                <input name="subject" placeholder="Subject" type="text" className={` p-2 bg-input rounded-large`} />
                            </label>
                            <label className={` p-2 rounded-large flex flex-col`}>
                                <span>Email:</span>
                                <input name="email" placeholder="email@example.com" type="text" className={` p-2 bg-input rounded-large`} />
                            </label>
                            <label className={` p-2 rounded-large flex flex-col`}>
                                <span>Phone:</span>
                                <input name="phone" placeholder="(123) 456-7890" type="text" className={` p-2 bg-input rounded-large`} />
                            </label>
                            <label className={` p-2 rounded-large flex flex-col`}>
                                <span>Date:</span>
                                <input name="date" placeholder="MM/DD/YYYY" type="text" className={` p-2 bg-input rounded-large`} />
                            </label>
                        </div>
                    </div>
                    <label className={`flex flex-col gap-2 w-1/2`}>
                        <span>Message*:</span>
                        <textarea id="message" name="message" placeholder="message" className={` min-h-40 w-full h-full p-2 bg-input rounded-large`} />
                    </label>
                </div>
                <div className={`flex justify-center m-4`}>
                    <button type="submit" className={` items-center mb-2 mt-2  w-1/4  rounded-large p-4 bg-buttonContainer`}>Submit</button>
                </div>

            </form>
        </div>
    )
}
