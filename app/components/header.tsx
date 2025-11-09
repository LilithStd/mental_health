'use client'
import { indents, rounded, THEME_COLOR_SCHEME, titleBaseStyles } from "../globalConsts/globalStyles";
import { useGlobalStore } from "../store/globalStore";
import AdditionalPanel from "./additionalPanel";
import ListLinks from "./links";


export default function Header() {
    const currentTheme = useGlobalStore((state) => state.currentTheme)

    return (
        <nav className={`flex m-10 ${rounded.medium}  justify-center items-center ${indents.container} ${THEME_COLOR_SCHEME[currentTheme].container}`}>
            <div className={`flex`}>
                <h1 className={`${titleBaseStyles} text-center`}>Mental Health</h1>

            </div>
            <div className={`flex justify-center w-xl`}>
                <ListLinks />
            </div>
            <div className={`flex justify-end`}>
                <AdditionalPanel />
            </div>
        </nav>
    )
}
