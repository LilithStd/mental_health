'use client'

import { rounded, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles"
import { useGlobalStore } from "@/app/store/globalStore";
import { TestType } from "@/app/tests/page"

interface FormProps {
    test: TestType
}

export default function Form({ test }: FormProps) {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    // components
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }
    return (

        <form onSubmit={handleSubmit} className={`flex flex-col justify-center items-center w-full gap-4 `}>
            <h1 className="text-lg font-bold">Выберите вариант:</h1>
            {test.questions.map((question) => (
                <div key={question.title} className="flex justify-center items-center flex-col gap-2">
                    <h2>{question.title}:</h2>
                    <div className={`flex items-center justify-center ${THEME_COLOR_SCHEME[currentTheme].subContainer} ${rounded.medium} p-2 gap-2`}>
                        {question.variants.map((variant) => (
                            <label
                                key={variant.id}
                                className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].elementAccent} p-2 ${rounded.medium} items-center cursor-pointer`}
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
                className={`${THEME_COLOR_SCHEME[currentTheme].buttonContainer} px-4 py-2 mt-4 rounded-md cursor-pointer`}
            >
                Отправить
            </button>
        </form>

    )
}
