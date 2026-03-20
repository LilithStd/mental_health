'use client'

import { TestType } from "@/app/[locale]/tests/page";
import { rounded, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles"
import { useLocale } from "@/app/hooks/useLocale";
import { calcTestResult } from "@/app/serverActions/calcTestResult";
import { useAuthorizationStore } from "@/app/store/authorizationStore";
import { useGlobalStore } from "@/app/store/globalStore";

import { useRef, useState } from "react";
import { useFormState } from "react-dom";
import { LocaleType } from "@/app/types/types";
import { GetTestResultButton } from "@/translate/testPage/testPage";

interface FormProps {
    test: TestType,
    formResult: (result: string) => void,
    openModalCallback: () => void
}

export default function Form({ test, formResult, openModalCallback }: FormProps) {
    // stores
    const [testAnswer, setTestAnswer] = useState({} as Record<string, string>);
    // const [state, formAction] = useFormState(calcTestResult, null)
    const locale = useLocale() as LocaleType

    // components
    const ref = useRef<HTMLFormElement>(null)
    async function action(formData: FormData) {
        await calcTestResult(formData)
        const data = await calcTestResult(formData)
        formResult(data.result)
        openModalCallback()
        ref.current?.reset()
        setTestAnswer({})
    }
    // functions
    const isFormValid = test.questions.every(
        (q) => testAnswer[q.title[locale]] !== undefined
    )

    return (

        <form action={action} ref={ref} className={`flex flex-col justify-center items-center w-full gap-4 `}>
            <h1 className="text-lg font-bold">{test.title[locale]}</h1>
            {test.questions.map((question) => (
                <div key={question.title[locale]} className="flex justify-center items-center flex-col gap-2">
                    <h2>{question.title[locale]}:</h2>
                    <div className={`flex items-center justify-center bg-mainContainer rounded-large p-2 gap-2`}>
                        {question.variants.map((variant) => (
                            <label
                                key={variant.id}
                                className={`flex flex-col bg-accentElement p-2 rounded-medium items-center cursor-pointer`}
                            >
                                <span>{variant.title}</span>
                                <input
                                    type="radio"
                                    name={question.title[locale]}
                                    value={variant.count}
                                    required
                                    className={``}
                                    onChange={(e) =>
                                        setTestAnswer(prev => ({
                                            ...prev,
                                            [question.title[locale]]: e.target.value
                                        }))
                                    }
                                />

                            </label>

                        ))}
                    </div>

                </div>
            ))}
            <button
                type="submit"
                className={`bg-buttonContainer ${isFormValid ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'} px-4 py-2 mt-4 rounded-large `}
                disabled={!isFormValid}
            >
                {GetTestResultButton[locale]}
            </button>
        </form>

    )
}
