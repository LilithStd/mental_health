'use client'
import { THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles";
import { useGlobalStore } from "@/app/store/globalStore";



export default function Search() {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    // 
    return (
        <div className={`${THEME_COLOR_SCHEME[currentTheme].subContaiuner}  rounded-md w-1/7 text-center items-center justify-center`}>
            <input type="text" placeholder="Search" className={`${THEME_COLOR_SCHEME[currentTheme].input} p-1 rounded-md w-full text-center`} />

        </div>
    )
}
