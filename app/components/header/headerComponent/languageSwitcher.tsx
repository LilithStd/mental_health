'use client'
import { LANGUAGE_APP } from "@/app/globalConsts/globalConsts"
import { useGlobalStore } from "@/app/store/globalStore"
import { LOCALES } from "@/app/types/types"
import LanguageIcon from "@/public/icons/Language.svg"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

// const locales = ["en", "ru", "lv"];

export default function LanguageSwitcher() {

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
      top-14
      left-1/2 -translate-x-1/2
      flex gap-2
      bg-accentElement
      rounded-medium
      p-2
      z-10
    "
        >
            {LOCALES.map((item) => (
                <div
                    key={item}
                    className={`${currentLocale === item ? 'bg-activeElement' : ''} rounded-medium p-2`}
                >
                    <button
                        className={`text-text ${currentLocale === item ? 'font-bold' : ''} cursor-pointer`}
                        onClick={() => {
                            switchLocale(item);
                            setIsOpen(false);
                        }}
                    >
                        {item.toUpperCase()}
                    </button>
                </div>
            ))}
        </div>
    );



    return (
        <div className="flex relative items-center p-2 cursor-pointer">
            {<div className={`bg-accentElement  p-2 w-10 rounded-medium cursor-pointer`}
                onClick={() => setIsOpen(!isOpen)}>
                <span className={`font-bold`}>{currentLocale.toUpperCase()}</span>
            </div>}
            {isOpen && listLanguage}
        </div>

    )
}
