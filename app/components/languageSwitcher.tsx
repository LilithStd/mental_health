'use client'

import { LANGUAGE_APP } from "../globalConsts/globalConsts"
import { useGlobalStore } from "../store/globalStore"

export default function LanguageSwitcher() {
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const setCurrentLanguage = useGlobalStore((state) => state.setCurrentLanguage)
    return (
        <div>
            {LANGUAGE_APP.map((item) => <p key={item}>{item}</p>)}
        </div>
    )
}
