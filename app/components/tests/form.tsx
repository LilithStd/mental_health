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

        <form onSubmit={handleSubmit} className={`flex flex-col gap-4 `}>
            <h1 className="text-lg font-bold">Выберите вариант:</h1>
            {test.questions.map((question) => (
                <div key={question.title} className="flex flex-col gap-2">
                    <h2>{question.title}</h2>
                    {question.variants.map((variant) => (
                        <label key={variant.id}>
                            <input type="radio" name={question.title} value={variant.count} required />
                            {variant.title}
                        </label>
                    ))}
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
