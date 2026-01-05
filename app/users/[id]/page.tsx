'use client'
import { use } from 'react'
import { THEME_COLOR_SCHEME, rounded, indents } from "@/app/globalConsts/globalStyles"
import { useGlobalStore } from "@/app/store/globalStore";


export default function Users({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = use(params)
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    return <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium} flex-1 ${indents.container.main}`}>{id}</div>
}
