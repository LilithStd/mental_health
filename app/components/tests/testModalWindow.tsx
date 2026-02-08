'use client'

import { rounded, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles";

import { useAuthorizationStore } from "@/app/store/authorizationStore";
import { useGlobalStore } from "@/app/store/globalStore";


interface TestModalWindowProps {
    result: string,
    testId: string,
    onCloseCallback: () => void
}

export default function TestModalWindow({ result, testId, onCloseCallback }: TestModalWindowProps) {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
    const currentAuthUser = useAuthorizationStore((state) => state.currentAuthUser);
    // functions
    const saveResultTest = async () => {
        if (!currentAuthUser || !currentAuthUser.id) {
            alert('You must be logged in to save test results.');
            return;
        }
        const res = await fetch('/api/saveResultUserTest', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                testId: testId,
                userId: currentAuthUser.id,
                resultCount: result
            }),
        })

        const data = await res.json()
        console.log(data)

        onCloseCallback()
    }
    // components
    return (
        <div className={`bg-subContainer p-6 rounded-lg border-2 flex flex-col items-center justify-center gap-4`}>
            <h2>Your result: {result}</h2>
            <div className={`flex gap-4`}>
                <button className={`${THEME_COLOR_SCHEME[currentTheme].buttonContainer} cursor-pointer px-4 py-2 ${rounded.medium}`} onClick={onCloseCallback}>Close</button>
                <button disabled={!currentAuthUser} className={`${!currentAuthUser ? 'opacity-50 cursor-not-allowed bg-gray-600' : 'cursor-pointer'} ${THEME_COLOR_SCHEME[currentTheme].buttonContainer}  px-4 py-2 ${rounded.medium}`} onClick={saveResultTest}>
                    {currentAuthUser ? 'Save Result' : 'Login to Save Result'}
                </button>
            </div>

        </div>
    )
}
