'use client'
import { routes } from "@/app/helpers/helpersFunctions";
import { useLocale } from "@/app/hooks/useLocale";
import { useGlobalStore } from "@/app/store/globalStore";
import { LocaleType } from "@/app/types/types";
import { useRouter } from "next/navigation";

// interface CreateArticleProps {

// }
export default function CreateArticle() {
    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    //stores
    // consts
    const router = useRouter()
    // handles
    const handleCancel = () => {
        router.push(routesAdaptive.articles.root)
    }
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const form = e.currentTarget
        const formData = new FormData(form)

        const res = await fetch('/api/articles', {
            method: 'POST',
            body: formData,
        })

        form.reset()
        if (res.ok) {
            router.push(routesAdaptive.articles.root)
        } else {
            alert('Error creating article')
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-4 p-4 max-content-main-container rounded-medium bg-primary-color/30 border border-primary-color/30 w-full`}
        >
            <h1 className="text-xl font-bold">{locale === 'en' ? 'Create Article' : 'Créer un article'}</h1>

            <input
                name="title"
                placeholder={"Title"}
                required
                className={`border p-2 bg-subContainer rounded-medium`}
            />
            <input
                name="author"
                placeholder="Author"
                required
                className={`border p-2 bg-subContainer rounded-medium`}
            />
            <textarea
                name="content"
                placeholder="Content"
                required
                className={`border p-2 h-32 bg-subContainer rounded-medium`}
            />
            <div className={`flex w-full gap-4`}>
                <button type="button" onClick={handleCancel} className={`bg-buttonContainer py-2 rounded-medium flex-1`}>Cancel</button>
                <button
                    type="submit"
                    className={`bg-buttonContainer py-2 rounded-medium flex-1`}
                >
                    Submit
                </button>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />

                <div className="
                    w-11 h-6 bg-gray-300 rounded-full
                    peer-checked:bg-blue-600
                    transition
                " />

                <div className="
                    absolute left-1 top-1
                    w-4 h-4 bg-white rounded-full
                    transition
                    peer-checked:translate-x-5
                " />
                </label>
        </form>
    )
}