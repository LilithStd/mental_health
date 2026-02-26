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

    const darkThemeCompoent = <div className={`relative w-14 h-full cursor-pointer`} onClick={() => setCurrentTheme(THEME.LIGHT)}>
        <Image src={cloudGray} alt="Cloud Gray" className="absolute z-1" />
        <Image src={MoonOnly} alt="Moon Only" className="absolute " />
    </div>

    const lightThemeComponent = <div className={`relative w-14 h-full cursor-pointer`} onClick={() => setCurrentTheme(THEME.DARK)}>
        <Image src={cloudWhite} alt="Cloud White" className="absolute z-1" />
        <Image src={SunOnly} alt="Sun Only" className="absolute " />
    </div>

    const wheatherBlock = <div className={`relative w-14 h-full`}>
        {currentTheme === THEME.LIGHT ? lightThemeComponent : darkThemeCompoent}
    </div>

    return (
        <div className={`flex items-center w-full flex-col justify-center cursor-pointer bg-activeElement rounded-circle`}>
            {wheatherBlock}
        </div>

    )
}
