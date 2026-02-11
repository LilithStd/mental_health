'use client'
import WithOutAuthorizationIcon from "@/public/icons/user/UserCircle.svg";
import AuthorisationIcon from "@/public/icons/user/UserLogout.svg";
import { useGlobalStore } from "../store/globalStore";
import { useEffect, useState } from "react";
import ModalWindowMain from "./modalWindowMain";
import ModalWindowAuthorization from "./modalWindows/modalWindowAuthorization";
import { APP_PATH_ROUTER, AUTHORIZATION_STATUS } from "../globalConsts/globalEnum";
import { AUTHORIZATION_TEXT, ROLE_AUTHORIZED_USER_TRANSLATE } from "../template/text";
import { useMockAuthStore, User } from "../store/mockAuthStore";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useAuthorizationStore } from "../store/authorizationStore";




export default function Authorization() {
    const router = useRouter();
    // stores
    // global store
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
    //user auth store
    const currentAuthUser = useAuthorizationStore((state) => state.currentAuthUser);
    const logoutUser = useAuthorizationStore((state) => state.logoutUser);
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

    // 
    //components
    const isAuthorizedComponent = (authUser: User) => {
        return (
            <div className={`flex flex-col items-center justify-center gap-2`} onClick={() => setIsOpenModalWindow(true)}>
                <AuthorisationIcon width={48} height={48} onClick={() => {
                    logoutUser(authUser.id);
                    router.push(APP_PATH_ROUTER.MAIN);

                }} />
                <div className={`cursor-pointer`}>
                    <Link href={`${APP_PATH_ROUTER.USERS}/${authUser.id}`} className={`hover:bg-hover cursor-pointer`} >{authUser.email}</Link>
                    {/* <h2>{ROLE_AUTHORIZED_USER_TRANSLATE[authUser.role].translate[currentLanguage]}</h2> */}
                </div>

            </div>
        )
    }
    const notAuthorizedComponent = () => {
        return (
            <div className={`flex flex-col items-center justify-center gap-2`} onClick={() => setIsOpenModalWindow(true)}>
                <WithOutAuthorizationIcon width={48} height={48} />
                <div className={`min-h-12 cursor-pointer`}>
                    <h2>{AUTHORIZATION_TEXT.SIGN_IN.translate[currentLanguage]}</h2>
                </div>

            </div>
        )
    }
    // 

    return (
        <div
            className={`flex w-full flex-col text-center items-center justify-center`}
        >
            {currentAuthUser ? isAuthorizedComponent(currentAuthUser) : notAuthorizedComponent()}
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
