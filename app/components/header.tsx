'use client'
import { indents, rounded, screenSizes, THEME_COLOR_SCHEME, titleBaseStyles } from "../globalConsts/globalStyles";
import { useGlobalStore } from "../store/globalStore";
import AdditionalPanel from "./additionalPanel";
import Authorization from "./autorization";
import ListLinks from "./links";


export default function Header() {
    const currentTheme = useGlobalStore((state) => state.currentTheme)

    return (
        <nav className={`flex ${rounded.medium}  justify-center items-center ${indents.container.main} ${THEME_COLOR_SCHEME[currentTheme].container}`}>
            <div className={`flex`}>
                <h1 className={`${titleBaseStyles} text-center`}>Mental Health</h1>

            </div>
            <div className={`flex justify-center lg:w-1/2  xl:w-1/3 `}>
                <ListLinks />
            </div>
            <div className={`flex justify-end`}>
                <AdditionalPanel />
            </div>
            <div>
                <Authorization />
            </div>
        </nav>
    )
}
