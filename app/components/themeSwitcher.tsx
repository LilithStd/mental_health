'use client'
import { useGlobalStore } from "../store/globalStore"

import LightThemeIcon from '../../public/icons/sun.svg'
import DarkThemeIcon from '../../public/icons/moon.svg'
import { THEME } from "../globalConsts/globalEnum"

export default function ThemeSwitcher() {
    const setCurrentTheme = useGlobalStore((state) => state.setCurrentTheme)
    const currentTheme = useGlobalStore((state) => state.currentTheme)
    return (
        <div className={`flex items-center`}>
            {currentTheme === THEME.LIGHT ?

                <LightThemeIcon onClick={() => setCurrentTheme(THEME.DARK)} /> : <DarkThemeIcon onClick={() => setCurrentTheme(THEME.LIGHT)} />}
        </div>

    )
}
