'use client'

import { useState } from "react";
import ModalWindowMain from "../modalWindowMain";
import ModalWindowAuthorization from "./modalWindowAuthorization";
import { AUTHORIZATION_TEXT } from "@/app/template/text";
import { AUTHORIZATION_STATUS } from "@/app/globalConsts/globalEnum";
import { useGlobalStore } from "@/app/store/globalStore";
import { UserAuthType } from "@/app/types/types";
import AuthUserComponent from "../authorization/authUserComponent";
import NoneAuthUserComponent from "../authorization/noneAuthUserComponent";


interface ModalWindowWrapperProps {
    currentAuthUser?: UserAuthType
}

export default function ModalWindowWrapper({ currentAuthUser }: ModalWindowWrapperProps) {
    const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);
    const [authorizationType, setAuthorizationType] = useState<AUTHORIZATION_STATUS>(AUTHORIZATION_STATUS.SIGN_IN);
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);


    const openModalWindowHandler = () => {
        setIsOpenModalWindow(true);
    }

    const closeModalWindowHandler = () => {
        setIsOpenModalWindow(false);
    }
    return (
        <div>
            {currentAuthUser ? (
                <AuthUserComponent authUser={currentAuthUser} callBackModal={openModalWindowHandler} />
            ) : (
                <NoneAuthUserComponent callBackModal={openModalWindowHandler} />
            )}
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
