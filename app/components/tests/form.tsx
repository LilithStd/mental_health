'use client'

import { TestType } from "@/app/tests/page"

interface FormProps {
    test: TestType
}

export default function Form({ test }: FormProps) {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
    }
    return (

        <form onSubmit={handleSubmit} className={`flex flex-col w-full gap-4 `}>
            <h1 className="text-lg font-bold">Выберите вариант:</h1>
            {test.questions.map((question) => (
                <div key={question.title} className="flex w-full gap-2">
                    <h2>{question.title}:</h2>
                    <div className={``}>
                        {question.variants.map((variant) => (
                            <label
                                key={variant.id}
                                className={`flex`}
                            >
                                <input
                                    type="radio"
                                    name={question.title}
                                    value={variant.count}
                                    required
                                    className={``}
                                />
                                <span>{variant.title}</span>
                            </label>

                        ))}
                    </div>

                </div>
            ))}
            <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded"
            >
                Отправить
            </button>
        </form>

    )
}
