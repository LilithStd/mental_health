'use client'

import { THEME_COLOR_SCHEME, rounded } from "@/app/globalConsts/globalStyles";
import { useGlobalStore } from "@/app/store/globalStore";

interface CreateArticleProps {
    onClose(): void
}
export default function CreateArticle({ onClose }: CreateArticleProps) {
    //stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    // 
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

        form.reset() // очищаем форму
        onClose()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 max-w-md"
        >
            <h1 className="text-xl font-bold">Create Article</h1>

            <input
                name="title"
                placeholder="Title"
                required
                className={`border p-2 ${THEME_COLOR_SCHEME[currentTheme].input} ${rounded.medium}`}
            />
            <input
                name="author"
                placeholder="Author"
                required
                className={`border p-2 ${THEME_COLOR_SCHEME[currentTheme].input} ${rounded.medium}`}
            />
            <textarea
                name="content"
                placeholder="Content"
                required
                className={`border p-2 h-32 ${THEME_COLOR_SCHEME[currentTheme].input} ${rounded.medium}`}
            />
            <div className={`flex w-full gap-4`}>
                <button onClick={onClose} className={`${THEME_COLOR_SCHEME[currentTheme].buttonContainer} py-2 ${rounded.medium} flex-1`}>Cancel</button>
                <button
                    type="submit"
                    className={`${THEME_COLOR_SCHEME[currentTheme].buttonContainer} py-2 ${rounded.medium} flex-1`}
                >
                    Submit
                </button>
            </div>

        </form>
    )
}