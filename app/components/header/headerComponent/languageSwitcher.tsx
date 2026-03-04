'use client'
import { LANGUAGE_APP } from "@/app/globalConsts/globalConsts"
import { useGlobalStore } from "@/app/store/globalStore"
import LanguageIcon from "@/public/icons/Language.svg"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

const locales = ["en", "ru", "lv"];

export default function LanguageSwitcher() {
    // const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    // const setCurrentLanguage = useGlobalStore((state) => state.setCurrentLanguage)

    const router = useRouter();
    const pathname = usePathname();

    const segments = pathname.split("/");
    const currentLocale = segments[1];

    const switchLocale = (locale: string) => {
        segments[1] = locale;
        router.push(segments.join("/"));
    };

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
            {/* {LANGUAGE_APP.map((item) => (
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
            ))} */}
            {locales.map((item) => (
                <div
                    key={item}
                    className={`${currentLocale === item ? 'bg-activeElement' : ''} rounded-medium p-2`}
                >
                    <button
                        className={`text-text ${currentLocale === item ? 'font-bold' : ''} cursor-pointer`}
                        onClick={() => {
                            // setCurrentLanguage(item);
                            switchLocale(item);
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
        <div className="flex rounded-medium  relative items-center justify-end w-full  p-2 cursor-pointer">
            {<div className=" cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}>
                <span className={` font-bold`}>{currentLocale}</span>
            </div>}
            {isOpen && listLanguage}
        </div>

    )
}
