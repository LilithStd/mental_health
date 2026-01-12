'use client'
import WithOutAutorizationIcon from "@/public/icons/user/UserCircle.svg";
import { useGlobalStore } from "../store/globalStore";
import { THEME_COLOR_SCHEME } from "../globalConsts/globalStyles";
import { useState } from "react";
import ModalWindowMain from "./modalWindowMain";
import ModalWindowAuthorization from "./modalWindows/modalWindowAuthorization";
import { AUTHORIZATION_STATUS } from "../globalConsts/globalEnum";
import { AUTHORIZATION_TEXT } from "../template/text";



export default function Authorization() {
    // stores
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    //state
    const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);
    const [authorizationType, setAuthorizationType] = useState<AUTHORIZATION_STATUS>(AUTHORIZATION_STATUS.SIGN_IN);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    //
    //handlers
    const closeModalWindowHandler = () => {
        setIsOpenModalWindow(false);
        setAuthorizationType(AUTHORIZATION_STATUS.SIGN_IN);
    }

    return (
        <div
            className={`flex w-full flex-col items-center justify-center gap-2 p-4 ${THEME_COLOR_SCHEME[currentTheme].container}`}

        >
            <div className={`flex flex-col items-center justify-center gap-2`} onClick={() => setIsOpenModalWindow(true)}>
                <WithOutAutorizationIcon width={48} height={48} />
                <h2>{AUTHORIZATION_TEXT.SIGN_IN.translate[currentLanguage]}</h2>
            </div>
            {isOpenModalWindow &&
                <ModalWindowMain openStatusCallBack={isOpenModalWindow} closeStatusCallBack={closeModalWindowHandler} >
                    <ModalWindowAuthorization
                        typeAuthorization={authorizationType}
                        contentTypeAuthorization={AUTHORIZATION_TEXT[authorizationType].translate[currentLanguage]}
                        setAuthorizationType={setAuthorizationType}
                        closeCallback={closeModalWindowHandler}
                    />
                </ModalWindowMain>
            }
        </div>
    )
}
