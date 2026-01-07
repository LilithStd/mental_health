'use client'
import { AUTHORIZATION_STATUS } from "@/app/globalConsts/globalEnum";
import { indents, rounded, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles"
import { useGlobalStore } from "@/app/store/globalStore";
import { AUTH_METHODS_SYSTEM_MESSAGES, INPUT_PLACEHOLDERS } from "@/app/template/text";

interface ModalWindowProps {
    typeAuthorization: string,
    contentTypeAuthorization: string,
    setAuthorizationType: (type: AUTHORIZATION_STATUS) => void
}
export default function ModalWindowAuthorization(props: ModalWindowProps) {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
    // 
    //functions
    const setAuthSignType = () => {
        props.setAuthorizationType(AUTHORIZATION_STATUS.SIGN_IN);
    }
    const setAuthRegType = () => {
        props.setAuthorizationType(AUTHORIZATION_STATUS.REGISTRATION);
    }
    // 
    // components
    const AuthSignInComponent = (
        <div className={`flex flex-col  ${THEME_COLOR_SCHEME[currentTheme].container} items-center justify-center gap-2 p-4 `}>
            <form action="" className={`flex flex-col items-center justify-center gap-2`}>
                <input type="text" placeholder={INPUT_PLACEHOLDERS.EMAIL[currentLanguage]} className={`mb-2 p-2 ${rounded.low} w-64 border`} />
                <input type="password" placeholder={INPUT_PLACEHOLDERS.PASSWORD[currentLanguage]} className={`mb-2 p-2 ${rounded.low} w-64 border`} />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-64 cursor-pointer">
                    {INPUT_PLACEHOLDERS.SUBMIT[currentLanguage]}
                </button>
            </form>
            <div>
                <div className={`flex  items-center justify-center gap-2`}>
                    <h2>{AUTH_METHODS_SYSTEM_MESSAGES.NOT_REGISTERED_YET[currentLanguage]} </h2>
                    <h2 className={`${THEME_COLOR_SCHEME[currentTheme].activeElement} cursor-pointer ${rounded.low} p-1`}
                        onClick={setAuthRegType}
                    >{AUTH_METHODS_SYSTEM_MESSAGES.HERE_LINK[currentLanguage]}</h2>
                </div>
            </div>
        </div>

    )
    const AuthRegistrationComponent = (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} items-center justify-center gap-2 p-4`}>
            <form action="" className={`flex flex-col items-center justify-center gap-2`}>
                <input type="text" placeholder={INPUT_PLACEHOLDERS.USERNAME[currentLanguage]} className={`mb-2 p-2 rounded-md w-64 border`} />
                <input type="text" placeholder={INPUT_PLACEHOLDERS.EMAIL[currentLanguage]} className={`mb-2 p-2 rounded-md w-64 border`} />
                <input type="password" placeholder={INPUT_PLACEHOLDERS.PASSWORD[currentLanguage]} className={`mb-2 p-2 rounded-md w-64 border`} />
                <input type="password" placeholder={INPUT_PLACEHOLDERS.REPEAT_PASSWORD[currentLanguage]} className={`mb-2 p-2 rounded-md w-64 border`} />
                <button type="submit" className="bg-green-500 text-white p-2 rounded-md w-64">Register</button>
            </form>
            <div className={`flex  items-center justify-center gap-2`}>
                <h2>{AUTH_METHODS_SYSTEM_MESSAGES.HAVE_ACCOUNT_SIGN_IN[currentLanguage]} </h2>
                <h2 className={`${THEME_COLOR_SCHEME[currentTheme].activeElement} ${rounded.low} p-1 cursor-pointer`}
                    onClick={setAuthSignType}
                >{AUTH_METHODS_SYSTEM_MESSAGES.HERE_LINK[currentLanguage]}</h2>
            </div>
        </div>


    )
    // 
    console.log('typeAuthorization', props.typeAuthorization);
    return (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} items-center justify-center gap-2 p-4 ${rounded.high}`}>
            <h2 className={``}>{props.contentTypeAuthorization}</h2>
            {props.typeAuthorization === AUTHORIZATION_STATUS.SIGN_IN ? AuthSignInComponent : AuthRegistrationComponent}
        </div>
    )
}
