'use client'

import Search from "../components/shared/search";
import { THEME_COLOR_SCHEME, rounded, indents } from "../globalConsts/globalStyles";
import { useGlobalStore } from "../store/globalStore";

export default function Tests() {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);

    return (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium} flex-1 ${indents.container.main} items-center text-center`}>
            <Search />
        </div>
    )
}
