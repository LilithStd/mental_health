'use client'
import WithOutAutorizationIcon from "@/public/icons/user/UserCircle.svg";
import { useGlobalStore } from "../store/globalStore";
import { THEME_COLOR_SCHEME } from "../globalConsts/globalStyles";
import { useState } from "react";
import ModalWindowMain from "./modalWindowMain";
import ModalWindowAuthorization from "./modalWindows/modalWindowAuthorization";



export default function Authorization() {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    //state
    const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);
    //
    //handlers
    const closeModalWindowHandler = () => {
        setIsOpenModalWindow(false);
    }

    console.log(isOpenModalWindow)

    return (
        <div
            className={`flex flex-col items-center justify-center gap-2 p-4 cursor-pointer ${THEME_COLOR_SCHEME[currentTheme].container}`}

        >
            <div className={`flex flex-col items-center justify-center gap-2`} onClick={() => setIsOpenModalWindow(true)}>
                <WithOutAutorizationIcon width={48} height={48} />
                <h2>Sign</h2>
            </div>
            {isOpenModalWindow &&
                <ModalWindowMain openStatusCallBack={isOpenModalWindow} closeStatusCallBack={closeModalWindowHandler} >
                    <ModalWindowAuthorization typeAuthorization="signIn" />
                </ModalWindowMain>
            }
        </div>
    )
}
