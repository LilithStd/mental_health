'use client'
import { indents, rounded, screenSizes, sizes, THEME_COLOR_SCHEME, titleBaseStyles } from "../globalConsts/globalStyles";
import { useGlobalStore } from "../store/globalStore";
import AdditionalPanel from "./additionalPanel";
import Authorization from "./authorization";
import ListLinks from "./links";


export default function Header() {
    const currentTheme = useGlobalStore((state) => state.currentTheme)

    return (
        <nav className={`flex ${rounded.medium}  justify-center items-center ${indents.container.main}  main-container items-center`}>
            <div className={`flex  justify-between items-center ${sizes.width.maxWidth} ${THEME_COLOR_SCHEME[currentTheme].subContainer}    ${rounded.medium} w-full`}>
                <div className={`flex`}>
                    <h1 className={`${titleBaseStyles} text-center`}>Mental Health</h1>

                </div>
                <div className={`flex justify-center lg:w-1/2  xl:w-1/2 md:w-2/5 sm:w-3/5 w-2/5`}>
                    <ListLinks />
                </div>
                <div className={`flex justify-end w-1/4 md:w-1/5 lg:w-1/7`}>
                    <AdditionalPanel />
                </div>
                <div className={`flex justify-end w-1/4 md:w-1/5 lg:w-1/7`}>
                    <Authorization />
                </div>
            </div>

        </nav>
    )
}
