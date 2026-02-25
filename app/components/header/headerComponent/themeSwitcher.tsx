'use client'


import LightThemeIcon from '@/public/icons/sun.svg'
import DarkThemeIcon from '@/public/icons/moon.svg'
import { THEME } from '@/app/globalConsts/globalEnum'
import { useGlobalStore } from '@/app/store/globalStore'
import Image from "next/image";
import cloudWhite from "@/public/images/header/cloudWhiteOnly.png"
import cloudGray from "@/public/images/header/cloudGray.png"
import SunOnly from "@/public/images/header/sunOnly.png"
import MoonOnly from "@/public/images/header/moonOnly.png"

export default function ThemeSwitcher() {
    const setCurrentTheme = useGlobalStore((state) => state.setCurrentTheme)
    const currentTheme = useGlobalStore((state) => state.currentTheme)

    const wheatherBlock = <div>
        <Image src={cloudWhite} alt="Cloud White" className="absolute pointer-events-none" />
        <Image src={cloudGray} alt="Cloud Gray" className="absolute pointer-events-none" />
        <Image src={SunOnly} alt="Sun Only" className="absolute pointer-events-none" />
        <Image src={MoonOnly} alt="Moon Only" className="absolute pointer-events-none" />
    </div>

    return (
        <div className={`flex items-center justify-center cursor-pointer bg-activeElement rounded-circle`}>
            {currentTheme === THEME.LIGHT ?

                <LightThemeIcon className={`cursor-pointer`} fill={'orange'} stroke={'teal'} onClick={() => setCurrentTheme(THEME.DARK)} /> : <DarkThemeIcon className="cursor-pointer" fill={'mediumSlateBlue'} stroke={'#483D8B'} onClick={() => setCurrentTheme(THEME.LIGHT)} />}
        </div>

    )
}
