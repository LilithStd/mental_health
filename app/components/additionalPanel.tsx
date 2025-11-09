'use client'
import { indents, rounded, THEME_COLOR_SCHEME } from '../globalConsts/globalStyles'
import { useGlobalStore } from '../store/globalStore'
import LanguageSwitcher from './languageSwitcher'
import ThemeSwitcher from './themeSwitcher'

export default function AdditionalPanel() {
    const currentTheme = useGlobalStore((state) => state.currentTheme)
    return (
        <div className={`flex ${indents.container} w-fit ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.high}`}>
            <ThemeSwitcher />
            <LanguageSwitcher />
        </div>
    )
}
