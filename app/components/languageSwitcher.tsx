'use client'
import { LANGUAGE_APP } from "../globalConsts/globalConsts"
import { indents, rounded, THEME_COLOR_SCHEME } from "../globalConsts/globalStyles"
import { useGlobalStore } from "../store/globalStore"
import ButtonComponent from "./shared/button"

export default function LanguageSwitcher() {
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const setCurrentLanguage = useGlobalStore((state) => state.setCurrentLanguage)
    const currentTheme = useGlobalStore((state) => state.currentTheme)
    return (
        <div className={`flex ${rounded.medium} items-center  bg-mainContainer`}>
            {LANGUAGE_APP.map((item) =>
                <div key={item} className={`${currentLanguage === item ? THEME_COLOR_SCHEME[currentTheme].activeElement : ''} ${rounded.medium} gap-2 p-2`}>
                    <ButtonComponent callBack={() => setCurrentLanguage(item)} content={item} />
                </div>

            )}
        </div>
    )
}
