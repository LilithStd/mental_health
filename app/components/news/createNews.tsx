'use client'

import { rounded, sizes, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles";
import { routes } from "@/app/helpers/helpersFunctions";
import { useGlobalStore } from "@/app/store/globalStore";
import { useRouter } from "next/navigation";

export default function CreateNews() {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    // state
    // consts
    const router = useRouter()
    // functions
    // handlers
    const handleReturnToNews = () => {
        router.push(routes.news.root)
    }
    const handlePreviewNews = () => {

    }
    const createNews = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget // ⬅️ сохраняем ссылку сразу
        const formData = new FormData(form)
        fetch('/api/news', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: formData.get('title'),
                content: formData.get('content'),
                link: formData.get('link'),
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('News created:', data);
                // Дополнительные действия после создания новости, например, очистка формы или отображение уведомления
            })
            .catch(error => {
                console.error('Error creating news:', error);
                // Обработка ошибок, например, отображение сообщения об ошибке пользователю
            });
    }
    //
    // components 
    const previewNewsComponent = <div>

    </div>

    return (
        <div className={`flex flex-col mb-4 p-2 w-full  ${rounded.medium} bg-subContainer ${sizes.width.maxWidth} gap-4`}>
            <h2>Create News</h2>
            <form action="" onSubmit={createNews} className={`flex flex-col gap-4 w-full`}>
                <input type="text" name="title" placeholder="Title" className="w-full mb-2 p-2 rounded-md border border-gray-300" />
                <textarea name="content" placeholder="Content" className="w-full min-h-40 mb-2 p-2 rounded-md border border-gray-300"></textarea>
                <input type="text" name="link" placeholder="Link" className="w-full mb-2 p-2 rounded-md border border-gray-300" />
                <div className={`flex w-full gap-4 justify-center`}>
                    <button type="button" onClick={handleReturnToNews} className={`p-2 ${THEME_COLOR_SCHEME[currentTheme].buttonContainer} ${rounded.medium} w-1/5`}>Cancel</button>
                    <button type="submit" className={`p-2 ${THEME_COLOR_SCHEME[currentTheme].buttonContainer} ${rounded.medium} w-1/5`}>Create</button>
                </div>
            </form>


        </div>
    )
}
