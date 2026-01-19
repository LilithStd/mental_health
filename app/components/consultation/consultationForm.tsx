'use client'

import { rounded, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles";
import { useGlobalStore } from "@/app/store/globalStore"

export default function ConsultationForm() {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
    // 
    return (
        <div className={`flex flex-col  items-center justify-center p-4 gap-4  ${rounded.medium}`}>
            <form className={`flex flex-col items-center justify-center gap-4 border-2 p-4 rounded-md ${THEME_COLOR_SCHEME[currentTheme].subContaiuner} `}>
                <label className={`text-center mb-2`}>Contact Information</label>
                <div className={`flex gap-4`}>

                    <div className={`flex flex-col gap-2 w-1/2`}>
                        <input placeholder="name" type="text" className={`border-2 w-full p-2 ${THEME_COLOR_SCHEME[currentTheme].input} ${rounded.medium}`} />
                        <input placeholder="email" type="text" className={`border-2 w-full p-2 ${THEME_COLOR_SCHEME[currentTheme].input} ${rounded.medium}`} />
                        <input placeholder="phone" type="text" className={`border-2 w-full p-2 ${THEME_COLOR_SCHEME[currentTheme].input} ${rounded.medium}`} />
                        <input placeholder="date" type="text" className={`border-2 w-full p-2 ${THEME_COLOR_SCHEME[currentTheme].input} ${rounded.medium}`} />
                    </div>
                    <div className={`flex flex-col gap-2 w-1/2`}>
                        <textarea placeholder="message" className={`border-2 w-full p-2 ${THEME_COLOR_SCHEME[currentTheme].input} ${rounded.medium}`} />
                    </div>
                </div>

                <button className={`border-2 w-1/2 rounded-md p-2 ${THEME_COLOR_SCHEME[currentTheme].buttonContainer} ${rounded.medium}`}>Submit</button>
            </form>
        </div>
    )
}
