'use client'
import { AUTHORIZATION_STATUS } from "@/app/globalConsts/globalEnum";
import { THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles"
import { useGlobalStore } from "@/app/store/globalStore";

interface ModalWindowProps {
    typeAuthorization: string,
    contentTypeAuthorization: string,
}
export default function ModalWindowAuthorization(props: ModalWindowProps) {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    // 

    // components
    const AuthSignInComponent = (
        <div>
            <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} items-center justify-center gap-2 p-4 cursor-pointer`}>
                <form action="" className={`flex flex-col items-center justify-center gap-2`}>
                    <input type="text" placeholder="Email" className="mb-2 p-2 rounded-md w-64" />
                    <input type="password" placeholder="Password" className="mb-2 p-2 rounded-md w-64" />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-64">Sign In</button>
                </form>
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
