'use client'
import { AUTHORIZATION_STATUS } from "@/app/globalConsts/globalEnum";
import { indents, rounded, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles"
import { useGlobalStore } from "@/app/store/globalStore";
import { useMockAuthStore } from "@/app/store/mockAuthStore";
import { AUTH_METHODS_SYSTEM_MESSAGES, INPUT_PLACEHOLDERS } from "@/app/template/text";
import { useEffect, useState } from "react";



interface ModalWindowProps {
    typeAuthorization: string,
    contentTypeAuthorization: string,
    setAuthorizationType: (type: AUTHORIZATION_STATUS) => void,
    closeCallback: () => void,
}
export default function ModalWindowAuthorization(props: ModalWindowProps) {
    //state
    const [succerssfullyCreated, setSuccessfullyCreated] = useState<boolean>(false);
    // 
    // stores
    // global store
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
    // user auth store
    const createUser = useMockAuthStore((state) => state.createUser);
    const users = useMockAuthStore((state) => state.users);
    const authenticateUser = useMockAuthStore((state) => state.authenticateUser);
    const setAuthUser = useMockAuthStore((state) => state.setCurrentAuthUser);
    // 

    const logoutUser = useMockAuthStore((state) => state.logoutUser);
    const checkAlreadyExists = useMockAuthStore((state) => state.checkUserExists);
    const resetUserStore = useMockAuthStore((state) => state.resetStore);
    // 
    //functions
    const setAuthSignType = () => {
        props.setAuthorizationType(AUTHORIZATION_STATUS.SIGN_IN);
    }
    const setAuthRegType = () => {
        props.setAuthorizationType(AUTHORIZATION_STATUS.REGISTRATION);
    }
    // Effect

    // 
    // handlers
    const createUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formCurrentData = event.currentTarget;
        const formData = new FormData(formCurrentData);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        if (checkAlreadyExists(email)) {
            alert('User already exists with this email.');
            return;
        } else {
            createUser(email, password);
            setSuccessfullyCreated(true);
            formCurrentData.reset();
            // props.closeCallback();
        }


    }

    const successfullyUserCreatedHandler = () => {
        
        setSuccessfullyCreated(false);
        props.closeCallback();
    }


    const signInUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formCurrentData = event.currentTarget;
        const formData = new FormData(formCurrentData);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        if (checkAlreadyExists(email) === false) {
            alert('No user found with this email.');
            console.log(checkAlreadyExists(email));
            return;
        }
        const authenticatedUser = authenticateUser(email, password);
        if (authenticatedUser) {
            // alert('Successfully signed in!');
            setAuthUser(authenticatedUser);
            formCurrentData.reset();
            props.closeCallback();
        } else {
            alert('Invalid email or password.');
        }
    }

    // components
    const AuthSignInComponent = (
        <div className={`flex flex-col  ${THEME_COLOR_SCHEME[currentTheme].container} items-center justify-center gap-2 p-4 `}>
            <form action="" className={`flex flex-col items-center justify-center gap-2`} key={props.typeAuthorization} onSubmit={signInUserHandler}>
                <input name="email" type="email" placeholder={INPUT_PLACEHOLDERS.EMAIL[currentLanguage]} className={`mb-2 p-2 ${rounded.low} w-64 border`} required />
                <input name="password" type="password" placeholder={INPUT_PLACEHOLDERS.PASSWORD[currentLanguage]} className={`mb-2 p-2 ${rounded.low} w-64 border`} required />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-64 cursor-pointer">
                    {INPUT_PLACEHOLDERS.SUBMIT[currentLanguage]}
                </button>
            </form>
            <div className={`flex  items-center justify-center gap-2 flex-col`}>

                <h2 className={``}>{AUTH_METHODS_SYSTEM_MESSAGES.NOT_REGISTERED_YET[currentLanguage].part1}</h2>
                <div className={`flex  items-center justify-center gap-2 flex-row`}>
                    <h2>{AUTH_METHODS_SYSTEM_MESSAGES.NOT_REGISTERED_YET[currentLanguage].part2}</h2>
                    <h2 className={`${THEME_COLOR_SCHEME[currentTheme].activeElement} cursor-pointer ${rounded.low} p-1 `}
                        onClick={setAuthRegType}
                    >{AUTH_METHODS_SYSTEM_MESSAGES.HERE_LINK[currentLanguage]}</h2>
                </div>

            </div>

        </div>

    )
    const AuthRegistrationComponent = (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} items-center justify-center gap-2 p-4`}>
            <form
                className="flex flex-col items-center justify-center gap-2"
                onSubmit={createUserHandler}
                key={props.typeAuthorization}
            >
                <input
                    name="username"
                    type="text"
                    placeholder={INPUT_PLACEHOLDERS.USERNAME[currentLanguage]}
                    className="mb-2 p-2 rounded-md w-64 border"
                />

                <input
                    name="email"
                    type="email"
                    placeholder={INPUT_PLACEHOLDERS.EMAIL[currentLanguage]}
                    className="mb-2 p-2 rounded-md w-64 border"
                    required
                />

                <input
                    name="password"
                    type="password"
                    placeholder={INPUT_PLACEHOLDERS.PASSWORD[currentLanguage]}
                    className="mb-2 p-2 rounded-md w-64 border"
                    required
                />

                <input
                    name="repeatPassword"
                    type="password"
                    placeholder={INPUT_PLACEHOLDERS.REPEAT_PASSWORD[currentLanguage]}
                    className="mb-2 p-2 rounded-md w-64 border"
                    required
                />

                <button type="submit" className="bg-green-500 text-white p-2 rounded-md w-64">
                    Register
                </button>
            </form>

            <div className={`flex  items-center justify-center gap-2 flex-col`}>
                <h2 className={``}>{AUTH_METHODS_SYSTEM_MESSAGES.HAVE_ACCOUNT_SIGN_IN[currentLanguage].part1} </h2>
                <div className={`flex  items-center justify-center gap-2 flex-row`}>
                    <h2>{AUTH_METHODS_SYSTEM_MESSAGES.HAVE_ACCOUNT_SIGN_IN[currentLanguage].part2}</h2>
                    <h2 className={`${THEME_COLOR_SCHEME[currentTheme].activeElement} ${rounded.low} p-1 cursor-pointer`}
                        onClick={setAuthSignType}
                    >{AUTH_METHODS_SYSTEM_MESSAGES.HERE_LINK[currentLanguage]}</h2>
                </div>

            </div>
        </div>


    )
    const successfullyUserCreatedComponent = () => (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} items-center justify-center gap-2 p-4`}>
            <h2>User successfully created!</h2>
            <button onClick={successfullyUserCreatedHandler} className="bg-blue-500 text-white p-2 rounded-md w-64 cursor-pointer">
                Return
            </button>
        </div>
    )
    // 
    return (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} items-center justify-center gap-2 p-4 ${rounded.high}`}>
            {succerssfullyCreated ? successfullyUserCreatedComponent() : <>
                <h2 className={``}>{props.contentTypeAuthorization}</h2>
                <h2 className="p-2 bg-amber-600" onClick={resetUserStore}>Res</h2>
                {props.typeAuthorization === AUTHORIZATION_STATUS.SIGN_IN ? AuthSignInComponent : AuthRegistrationComponent}
            </>}

        </div>
    )
}
