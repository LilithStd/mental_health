'use client'

import { rounded, sizes, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles";
import { useGlobalStore } from "@/app/store/globalStore"

export default function ConsultationForm() {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
    // 
    return (
        <div className={`flex flex-col p-4 gap-4 w-full ${rounded.medium}`}>
            <form className={`w-full max-w-6xl mx-auto  border-2 p-4 items-center rounded-md ${THEME_COLOR_SCHEME[currentTheme].subContainer} ${sizes.width.maxWidth} w-full `}>
                <label className={`text-center mb-2`}>Contact Information</label>
                <div className={`flex gap-4 flex-col w-full items-center  h-full`}>
                    <div className={`flex items-center gap-2 w-1/2`}>
                        <div className={`flex flex-col  w-1/2`}>
                            <label htmlFor="name" className={`border-2 p-2`}>Your Name:</label>
                            <label htmlFor="subject" className={`border-2 p-2`}>Subject:</label>
                            <label htmlFor="email" className={`border-2 p-2`}>Email:</label>
                            <label htmlFor="phone" className={`border-2 p-2`}>Phone:</label>
                            <label htmlFor="date" className={`border-2 p-2`}>Date:</label>
                        </div>
                        <div className={`flex flex-col  w-1/2`}>
                            <input id="name" placeholder="name" type="text" className={`border-2 p-2 ${THEME_COLOR_SCHEME[currentTheme].input} ${rounded.medium}`} />
                            <input id="subject" placeholder="subject" type="text" className={`border-2 p-2 ${THEME_COLOR_SCHEME[currentTheme].input} ${rounded.medium}`} />
                            <input id="email" placeholder="email" type="text" className={`border-2 p-2 ${THEME_COLOR_SCHEME[currentTheme].input} ${rounded.medium}`} />
                            <input id="phone" placeholder="phone" type="text" className={`border-2  p-2 ${THEME_COLOR_SCHEME[currentTheme].input} ${rounded.medium}`} />
                            <input id="date" placeholder="date" type="text" className={`border-2  p-2 ${THEME_COLOR_SCHEME[currentTheme].input} ${rounded.medium}`} />
                        </div>
                    </div>
                    <div className={`flex flex-col gap-2 w-1/2`}>
                        <textarea id="message" placeholder="message" className={`border-2 min-h-40 w-full h-full p-2 ${THEME_COLOR_SCHEME[currentTheme].input} ${rounded.medium}`} />
                    </div>
                </div>
                <div className={`flex justify-center w-full`}>
                    <button type="submit" className={`border-2  items-center mb-2 mt-2  w-1/2 rounded-md p-2 ${THEME_COLOR_SCHEME[currentTheme].buttonContainer} ${rounded.medium}`}>Submit</button>
                </div>

            </form>
        </div>
    )
}
