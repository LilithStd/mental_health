'use client'

import { THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles";
import { useGlobalStore } from "@/app/store/globalStore";
import { indents, rounded } from "@/app/globalConsts/globalStyles";
import CreateNews from "@/app/components/news/createNews";

export default function CreateNewsPage() {
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    return (
        <div className={`flex flex-col  ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium} flex-1 ${indents.container.main} gap-2 items-center `}>
            <CreateNews />
        </div>
    )
}
