'use client'
import { useLocale } from "@/app/hooks/useLocale";
import { calcTestResult } from "@/app/serverActions/calcTestResult";
import { useRef, useState } from "react";
import { LocaleType, TestType } from "@/app/types/types";
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
        await calcTestResult(formData, locale)
        const data = await calcTestResult(formData, locale)
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
                <div key={question.title[locale]} className="flex w-full justify-center items-center flex-col gap-2 bg-primary-color/20 rounded-large p-4 border border-primary-color/30 shadow-md">
                    <h2>{question.title[locale]}:</h2>
                    <div className={`flex w-full items-center justify-center  p-2 gap-2`}>
                        {question.variants.map((variant) => (
                            <label
                                key={variant.id}
                                className={`flex w-full flex-col bg-primary-color/30 border border-primary-color/30 p-2 rounded-large items-center cursor-pointer shadow-md`}
                            >
                                <span>{variant.title[locale]}</span>
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
                className={`bg-buttonContainer ${isFormValid ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'} p-4 mt-4 rounded-full `}
                disabled={!isFormValid}
            >
                <span className={`text-xl`}>{GetTestResultButton[locale]}</span>
                
            </button>
        </form>

    )
}
