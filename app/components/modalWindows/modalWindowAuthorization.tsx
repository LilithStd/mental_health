'use client'
import { AUTHORIZATION_STATUS } from "@/app/globalConsts/globalEnum";
import { loginAction } from "@/app/serverActions/auth/auth";
import { useGlobalStore } from "@/app/store/globalStore";
import { useMockAuthStore } from "@/app/store/mockAuthStore";
import { AUTH_METHODS_SYSTEM_MESSAGES, INPUT_PLACEHOLDERS } from "@/app/template/text";
import { useState } from "react";



interface ModalWindowProps {
    typeAuthorization: string,
    contentTypeAuthorization: string,
    setAuthorizationType: (type: AUTHORIZATION_STATUS) => void,
    closeCallback: () => void,
}
export default function ModalWindowAuthorization(props: ModalWindowProps) {
    //state
    const [succerssfullyCreated, setSuccessfullyCreated] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    // 
    // stores
    // global store

    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
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

    const createUserApiHandler = async (email: string, pass: string) => {
        const res = await fetch('/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password: pass })
        });
        const data = await res.json();
        console.log(data);
        //
    }
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
            // createUser(email, password);
            createUserApiHandler(email, password);
            setSuccessfullyCreated(true);
            formCurrentData.reset();
        }


    }

    const successfullyUserCreatedHandler = () => {

        setSuccessfullyCreated(false);
        props.closeCallback();
    }

    const signInUserHandler = async (formData: FormData) => {
        const result = await loginAction(formData)

        if (result?.error) {
            setError(result.error)
            return
        }

        props.closeCallback()
    }


    // components
    const AuthSignInComponent = (
        <div className={`flex flex-col  bg-mainContainer items-center justify-center gap-2 p-4 `}>
            <form action={signInUserHandler} className={`flex flex-col items-center justify-center gap-2`} key={props.typeAuthorization}>
                <input name="email" type="email" placeholder={INPUT_PLACEHOLDERS.EMAIL[currentLanguage]} className={`mb-2 p-2 rounded-small w-64 border`} required />
                <input name="password" type="password" placeholder={INPUT_PLACEHOLDERS.PASSWORD[currentLanguage]} className={`mb-2 p-2 rounded-small w-64 border`} required />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-64 cursor-pointer">
                    {INPUT_PLACEHOLDERS.SUBMIT[currentLanguage]}
                </button>
            </form>
            <div className={`flex  items-center justify-center gap-2 flex-col`}>

                <h2 className={``}>{AUTH_METHODS_SYSTEM_MESSAGES.NOT_REGISTERED_YET[currentLanguage].part1}</h2>
                <div className={`flex  items-center justify-center gap-2 flex-row`}>
                    <h2>{AUTH_METHODS_SYSTEM_MESSAGES.NOT_REGISTERED_YET[currentLanguage].part2}</h2>
                    <h2 className={`bg-activeElement cursor-pointer rounded-small p-1 `}
                        onClick={setAuthRegType}
                    >{AUTH_METHODS_SYSTEM_MESSAGES.HERE_LINK[currentLanguage]}</h2>
                </div>

            </div>

        </div>

    )
    const AuthRegistrationComponent = (
        <div className={`flex flex-col bg-mainContainer items-center justify-center gap-2 p-4`}>
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
                    <h2 className={`bg-accentElement rounded-small p-1 cursor-pointer`}
                        onClick={setAuthSignType}
                    >{AUTH_METHODS_SYSTEM_MESSAGES.HERE_LINK[currentLanguage]}</h2>
                </div>

            </div>
        </div>


    )
    const successfullyUserCreatedComponent = () => (
        <div className={`flex flex-col bg-mainContainer items-center justify-center gap-2 p-4`}>
            <h2>User successfully created!</h2>
            <button onClick={successfullyUserCreatedHandler} className="bg-blue-500 p-2 rounded-small w-64 cursor-pointer">
                Return
            </button>
        </div>
    )
    // 
    return (
        <div className={`flex flex-col bg-mainContainer items-center justify-center gap-2 p-4 rounded-large`}>
            {succerssfullyCreated ? successfullyUserCreatedComponent() : <>
                <h2 className={``}>{props.contentTypeAuthorization}</h2>
                <h2 className="p-2 bg-amber-600" onClick={resetUserStore}>Res</h2>
                {props.typeAuthorization === AUTHORIZATION_STATUS.SIGN_IN ? AuthSignInComponent : AuthRegistrationComponent}
            </>}

        </div>
    )
}
