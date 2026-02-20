'use client'
import { useAuth } from "@/app/authClientWrapper";
import { routes } from "@/app/helpers/helpersFunctions";

import { useRouter } from "next/navigation";
export default function CreateNewsButtonComponent() {
    // stores
    // state
    // consts
    const currentAuthUser = useAuth()
    const router = useRouter()
    // functions
    // handlers
    if (!currentAuthUser) return null

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
        <button className={` bg-buttonContainer mb-4 w-fit  p-2 rounded-circle`} onClick={() => router.push(routes.news.create())}>Create News</button>
    )
}
