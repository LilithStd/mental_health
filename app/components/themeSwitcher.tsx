'use client'
import { useGlobalStore } from "../store/globalStore"

import LightThemeIcon from '../../public/icons/sun.svg'
import DarkThemeIcon from '../../public/icons/moon.svg'
import { THEME } from "../globalConsts/globalEnum"
import { indents } from "../globalConsts/globalStyles"

export default function ThemeSwitcher() {
    const setCurrentTheme = useGlobalStore((state) => state.setCurrentTheme)
    const currentTheme = useGlobalStore((state) => state.currentTheme)
    return (
        <div className={`flex items-center ${indents.container}`}>
            {currentTheme === THEME.LIGHT ?

                <LightThemeIcon fill={'orange'} stroke={'teal'} onClick={() => setCurrentTheme(THEME.DARK)} /> : <DarkThemeIcon fill={'redmediumSlateBlue'} stroke={'#483D8B'} onClick={() => setCurrentTheme(THEME.LIGHT)} />}
        </div>

    )
}
