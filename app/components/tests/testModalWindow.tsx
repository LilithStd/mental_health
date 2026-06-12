'use client'

import { useUser } from "@/app/authClientWrapper";
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import { BUTTON_CLOSE } from "@/translate/global/button";
import { LOGIN_TO_SAVE_RESULT_BUTTON, RESULT_TEST_CONTENT, SAVE_RESULT_BUTTON } from "@/translate/testPage/testPage";



interface TestModalWindowProps {
    result: string,
    testId: string,
    onCloseCallback: () => void
}

export default function TestModalWindow({ result, testId, onCloseCallback }: TestModalWindowProps) {
    // stores
    const currentAuthUser = useUser();
    const locale = useLocale() as LocaleType

    // functions
    // const saveResultTest = async () => {
    //     if (!currentAuthUser || !currentAuthUser.id) {
    //         alert('You must be logged in to save test results.');
    //         return;
    //     }
    //     const res = await fetch('/api/saveResultUserTest', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             testId: testId,
    //             userId: currentAuthUser.id,
    //             resultCount: result
    //         }),
    //     })

    //     if (res.ok) {
    //         alert('Result saved successfully!');
    //     } else {
    //         alert('Failed to save result. Please try again.');
    //     }

    //     onCloseCallback()
    // }
    // components
    return (
        <div className={`backdrop-blur-md p-6 rounded-lg  flex flex-col items-center justify-center gap-4`}>
            <h2>{RESULT_TEST_CONTENT[locale]}: {result}</h2>
            <div className={`flex gap-4`}>
                <button className={` cursor-pointer px-4 py-2 bg-buttonContainer rounded-full`} onClick={onCloseCallback}>{BUTTON_CLOSE[locale]}</button>
                {/* <button disabled={!currentAuthUser} className={`${!currentAuthUser ? 'opacity-50 cursor-not-allowed bg-gray-600' : 'cursor-pointer'} bg-buttonContainer rounded-full  px-4 py-2 `} onClick={saveResultTest}>
                    {currentAuthUser ? SAVE_RESULT_BUTTON[locale] : LOGIN_TO_SAVE_RESULT_BUTTON[locale]}
                </button> */}
            </div>

        </div>
    )
}
