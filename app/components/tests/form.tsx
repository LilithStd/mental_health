'use client'

import { rounded, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles"
import { calcTestResult } from "@/app/serverActions/calcTestResult";
import { useAuthorizationStore } from "@/app/store/authorizationStore";
import { useGlobalStore } from "@/app/store/globalStore";
import { TestType } from "@/app/tests/page"
import { useRef, useState } from "react";
import { useFormState } from "react-dom";


interface FormProps {
    test: TestType,
    formResult: (result: string) => void,
    openModalCallback: () => void
}

export default function Form({ test, formResult, openModalCallback }: FormProps) {
    // stores
    // const [state, formAction] = useFormState(calcTestResult, null)


    // components
    const ref = useRef<HTMLFormElement>(null)
    async function action(formData: FormData) {
        await calcTestResult(formData)
        const data = await calcTestResult(formData)
        formResult(data.result)
        openModalCallback()
        ref.current?.reset()
    }

    return (

        <form action={action} ref={ref} className={`flex flex-col justify-center items-center w-full gap-4 `}>
            <h1 className="text-lg font-bold">Выберите вариант:</h1>
            {test.questions.map((question) => (
                <div key={question.title} className="flex justify-center items-center flex-col gap-2">
                    <h2>{question.title}:</h2>
                    <div className={`flex items-center justify-center bg-mainContainer rounded-large p-2 gap-2`}>
                        {question.variants.map((variant) => (
                            <label
                                key={variant.id}
                                className={`flex flex-col bg-accentElement p-2 rounded-medium items-center cursor-pointer`}
                            >
                                <span>{variant.title}</span>
                                <input
                                    type="radio"
                                    name={question.title}
                                    value={variant.count}
                                    required
                                    className={``}
                                />

                            </label>

                        ))}
                    </div>

                </div>
            ))}
            <button
                type="submit"
                className={`bg-buttonContainer px-4 py-2 mt-4 rounded-large cursor-pointer`}
            >
                Отправить
            </button>
        </form>

    )
}
