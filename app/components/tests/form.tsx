'use client'

export default function Form() {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const res = await fetch('/api/test', {
            method: 'POST',
            body: formData,
        })

        const data = await res.json()
        console.log(data)
    }
    return (

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm">
            <h1 className="text-lg font-bold">Выберите вариант:</h1>

            <label>
                <input type="radio" name="answer" value="variant_1" required />
                Вариант 1
            </label>

            <label>
                <input type="radio" name="answer" value="variant_2" />
                Вариант 2
            </label>

            <label>
                <input type="radio" name="answer" value="variant_3" />
                Вариант 3
            </label>

            <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded"
            >
                Отправить
            </button>
        </form>

    )
}
