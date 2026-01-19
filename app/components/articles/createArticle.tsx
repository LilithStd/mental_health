'use client'
interface CreateArticleProps {
    onClose(): void
}
export default function CreateArticle({ onClose }: CreateArticleProps) {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const form = e.currentTarget // ⬅️ сохраняем ссылку сразу
        const formData = new FormData(form)

        const res = await fetch('/api/article', {
            method: 'POST',
            body: formData,
        })

        const data = await res.json()
        console.log(data)

        form.reset() // ✅ теперь безопасно
        onClose()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-md"
        >
            <h1 className="text-xl font-bold">Создать статью</h1>

            <input
                name="title"
                placeholder="Заголовок"
                required
                className="border p-2"
            />

            <textarea
                name="content"
                placeholder="Текст статьи"
                required
                className="border p-2 h-32"
            />

            <button
                type="submit"
                className="bg-black text-white py-2 rounded"
            >
                Отправить
            </button>
        </form>
    )
}