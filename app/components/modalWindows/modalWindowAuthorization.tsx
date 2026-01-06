'use client'
import { AUTHORIZATION_STATUS } from "@/app/globalConsts/globalEnum";
import { THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles"
import { useGlobalStore } from "@/app/store/globalStore";
import { AUTH_METHODS_SYSTEM_MESSAGES, INPUT_PLACEHOLDERS } from "@/app/template/text";

interface ModalWindowProps {
    typeAuthorization: string,
    contentTypeAuthorization: string,
}
export default function ModalWindowAuthorization(props: ModalWindowProps) {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
    // 

    // components
    const AuthSignInComponent = (
        <div>
            <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} items-center justify-center gap-2 p-4 cursor-pointer`}>
                <form action="" className={`flex flex-col items-center justify-center gap-2`}>
                    <input type="text" placeholder={INPUT_PLACEHOLDERS.EMAIL[currentLanguage]} className="mb-2 p-2 rounded-md w-64" />
                    <input type="password" placeholder={INPUT_PLACEHOLDERS.PASSWORD[currentLanguage]} className="mb-2 p-2 rounded-md w-64" />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-64">
                        {INPUT_PLACEHOLDERS.SUBMIT[currentLanguage]}
                    </button>
                </form>
                <div>
                    <div>
                        <h2>{AUTH_METHODS_SYSTEM_MESSAGES.NOT_REGISTERED_YET[currentLanguage]}</h2>
                    </div>
                    <div>
                        <h2>{AUTH_METHODS_SYSTEM_MESSAGES.HAVE_ACCOUNT_SIGN_IN[currentLanguage]}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
    const AuthRegistrationComponent = (
        <div>
            <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} items-center justify-center gap-2 p-4 cursor-pointer`}>
                <form action="" className={`flex flex-col items-center justify-center gap-2`}>
                    <input type="text" placeholder="Username" className="mb-2 p-2 rounded-md w-64" />
                    <input type="text" placeholder="Email" className="mb-2 p-2 rounded-md w-64" />
                    <input type="password" placeholder="Password" className="mb-2 p-2 rounded-md w-64" />
                    <button type="submit" className="bg-green-500 text-white p-2 rounded-md w-64">Register</button>
                </form>
                <div>
                    <h2>{AUTH_METHODS_SYSTEM_MESSAGES.ALREADY_REGISTERED[currentLanguage]}</h2>
                </div>
            </div>

        </div>
    )
    // 
    console.log('typeAuthorization', props.typeAuthorization);
    return (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} items-center justify-center gap-2 p-4 cursor-pointer`}>
            <h2 className={``}>{props.contentTypeAuthorization}</h2>
            {props.typeAuthorization === AUTHORIZATION_STATUS.SIGN_IN ? AuthSignInComponent : AuthRegistrationComponent}
        </div>
    )
}
