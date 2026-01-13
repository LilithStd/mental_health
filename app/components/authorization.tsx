'use client'
import WithOutAuthorizationIcon from "@/public/icons/user/UserCircle.svg";
import AuthorisationIcon from "@/public/icons/user/UserLogout.svg";
import { useGlobalStore } from "../store/globalStore";
import { THEME_COLOR_SCHEME } from "../globalConsts/globalStyles";
import { useEffect, useState } from "react";
import ModalWindowMain from "./modalWindowMain";
import ModalWindowAuthorization from "./modalWindows/modalWindowAuthorization";
import { AUTHORIZATION_STATUS } from "../globalConsts/globalEnum";
import { AUTHORIZATION_TEXT } from "../template/text";
import { useMockAuthStore, User } from "../store/mockAuthStore";



export default function Authorization() {
    // stores
    // global store
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    //user auth store
    const currentAuthUser = useMockAuthStore((state) => state.currentAuthUser);
    // 
    //state
    const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);
    const [authorizationType, setAuthorizationType] = useState<AUTHORIZATION_STATUS>(AUTHORIZATION_STATUS.SIGN_IN);
    //
    //handlers
    const closeModalWindowHandler = () => {
        setIsOpenModalWindow(false);
        setAuthorizationType(AUTHORIZATION_STATUS.SIGN_IN);
    }
    // effects
    useEffect(() => { }, [])
    // 
    //components
    const isAuthorizedComponent = (authUser: User) => {
        return (
            <div className={`flex flex-col items-center justify-center gap-2`}>
                <AuthorisationIcon width={48} height={48} />
                <h2>{authUser.email}</h2>
            </div>
        )
    }
    const notAuthorizedComponent = () => {
        return (
            <div className={`flex flex-col items-center justify-center gap-2`} onClick={() => setIsOpenModalWindow(true)}>
                <WithOutAuthorizationIcon width={48} height={48} />
                <h2>{AUTHORIZATION_TEXT.SIGN_IN.translate[currentLanguage]}</h2>
            </div>
        )
    }
    // 

    return (
        <div
            className={`flex w-full flex-col items-center justify-center gap-2 p-4 ${THEME_COLOR_SCHEME[currentTheme].container}`}
        >
            {currentAuthUser ? isAuthorizedComponent(currentAuthUser) : notAuthorizedComponent()}
            {/* <div className={`flex flex-col items-center justify-center gap-2`} onClick={() => setIsOpenModalWindow(true)}>
                <WithOutAuthorizationIcon width={48} height={48} />
                <h2>{AUTHORIZATION_TEXT.SIGN_IN.translate[currentLanguage]}</h2>
            </div> */}
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
