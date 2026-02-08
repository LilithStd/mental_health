'use client'

import { THEME_COLOR_SCHEME, rounded, sizes } from "@/app/globalConsts/globalStyles";
import { routes } from "@/app/helpers/helpersFunctions";
import { useGlobalStore } from "@/app/store/globalStore";
import { useRouter } from "next/navigation";

// interface CreateArticleProps {

// }
export default function CreateArticle() {
    //stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    // consts
    const router = useRouter()
    // handles
    const handleCancel = () => {
        router.push(routes.articles.root)
    }
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const form = e.currentTarget // ⬅️ сохраняем ссылку сразу
        const formData = new FormData(form)

        const res = await fetch('/api/articles', {
            method: 'POST',
            body: formData,
        })

        const data = await res.json()
        console.log(data)

        form.reset() // очищаем форму
        // onClose()
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-4 p-4 w-full ${sizes.width.maxWidth} ${rounded.medium} bg-subContainer ${THEME_COLOR_SCHEME[currentTheme].text}`}
        >
            <h1 className="text-xl font-bold">Create Article</h1>

            <input
                name="title"
                placeholder="Title"
                required
                className={`border p-2 bg-subContainer ${rounded.medium}`}
            />
            <input
                name="author"
                placeholder="Author"
                required
                className={`border p-2 bg-subContainer ${rounded.medium}`}
            />
            <textarea
                name="content"
                placeholder="Content"
                required
                className={`border p-2 h-32 bg-subContainer ${rounded.medium}`}
            />
            <div className={`flex w-full gap-4`}>
                <button type="button" onClick={handleCancel} className={`${THEME_COLOR_SCHEME[currentTheme].buttonContainer} py-2 ${rounded.medium} flex-1`}>Cancel</button>
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