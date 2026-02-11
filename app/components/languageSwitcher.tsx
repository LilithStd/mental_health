'use client'
import { LANGUAGE_APP } from "../globalConsts/globalConsts"
import { useGlobalStore } from "../store/globalStore"
import LanguageIcon from "../../public/icons/Language.svg"
import { useState } from "react"


export default function LanguageSwitcher() {
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const setCurrentLanguage = useGlobalStore((state) => state.setCurrentLanguage)
    // state
    const [isOpen, setIsOpen] = useState(false)
    // 
    // components
    const listLanguage = (
        <div
            className="
      absolute
      top-12
      left-1/2 -translate-x-1/2
      flex gap-2
      bg-accentElement
      rounded-medium
      p-2
      z-10
    "
        >
            {LANGUAGE_APP.map((item) => (
                <div
                    key={item}
                    className={`${currentLanguage === item ? 'bg-activeElement' : ''} rounded-medium p-2`}
                >
                    <button
                        className={`text-text ${currentLanguage === item ? 'font-bold' : ''} cursor-pointer`}
                        onClick={() => {
                            setCurrentLanguage(item);
                            setIsOpen(false);
                        }}
                    >
                        {item}
                    </button>
                </div>
            ))}
        </div>
    );



    return (
        <div className="flex rounded-medium items-center relative">
            {/* <LanguageIcon
                className="w-6 h-6 mr-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            /> */}
            {<div className=" cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}>
                <span className={`font-bold`}>{currentLanguage}</span>
            </div>}
            {isOpen && listLanguage}
        </div>

    )
}
