'use client'
import { THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles"
import { useGlobalStore } from "@/app/store/globalStore";

interface ModalWindowProps {
    typeAuthorization: string
}
export default function ModalWindowAuthorization(props: ModalWindowProps) {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    // 
    return (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} items-center justify-center gap-2 p-4 cursor-pointer`}>
            <h2 className={``}>{props.typeAuthorization}</h2>
        </div>
    )
}
