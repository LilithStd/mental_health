'use client'
import { useGlobalStore } from "../store/globalStore"

import LightThemeIcon from '../../public/icons/sun.svg'
import DarkThemeIcon from '../../public/icons/moon.svg'
import { THEME } from "../globalConsts/globalEnum"

export default function ThemeSwitcher() {
    const setCurrentTheme = useGlobalStore((state) => state.setCurrentTheme)
    const currentTheme = useGlobalStore((state) => state.currentTheme)
    return (
        <div className={`flex items-center justify-center cursor-pointer bg-activeElement rounded-circle`}>
            {currentTheme === THEME.LIGHT ?

                <LightThemeIcon className={`cursor-pointer`} fill={'orange'} stroke={'teal'} onClick={() => setCurrentTheme(THEME.DARK)} /> : <DarkThemeIcon className="cursor-pointer" fill={'mediumSlateBlue'} stroke={'#483D8B'} onClick={() => setCurrentTheme(THEME.LIGHT)} />}
        </div>

    )
}
