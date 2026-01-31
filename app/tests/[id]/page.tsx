'use client'
import { THEME_COLOR_SCHEME, rounded, indents } from "@/app/globalConsts/globalStyles"
import { useGlobalStore } from "@/app/store/globalStore";
import { use } from "react"


export default function Test({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    const { id } = use(params)
    return (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium} flex-1 ${indents.container.main} items-center text-center`}>test page {id}</div>
    )
}
