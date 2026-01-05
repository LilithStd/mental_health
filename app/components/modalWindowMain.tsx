'use client'

import { THEME_COLOR_SCHEME } from "../globalConsts/globalStyles";
import { useGlobalStore } from "../store/globalStore";

interface ModalWindowProps {
    openStatusCallBack: boolean
    closeStatusCallBack: () => void
    children?: React.ReactNode
}

export default function ModalWindowMain(props: ModalWindowProps) {
    //stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    // 
    if (!props.openStatusCallBack) {
        return null
    }
    return (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="relative">
                {/* Кнопка закрытия */}
                <button
                    onClick={props.closeStatusCallBack}
                    className={` absolute -top-3 -right-3
                            w-8 h-8
                            flex items-center justify-center
                            rounded-full
                            text-xl font-bold
                            cursor-pointer
                            ${THEME_COLOR_SCHEME[currentTheme].activeElement}
                            ${THEME_COLOR_SCHEME[currentTheme].hover}
                            
                           `}


                    aria-label="Close modal"
                >
                    ×
                </button>

                {/* Контент модалки */}
                {props.children}
            </div>
        </div>



    )
}
