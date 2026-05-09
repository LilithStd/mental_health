'use client'

import { useUser } from "@/app/authClientWrapper";
import { routes } from "@/app/helpers/helpersFunctions";
import { useLocale } from "@/app/hooks/useLocale";
import { canEditContent } from "@/app/serverActions/permissions";
import { LocaleType } from "@/app/types/types";
import { BUTTON_ADDED_NEWS } from "@/translate/mediaPage/mediaPageContent";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function CreateNewsButtonComponent() {
    // stores
    // state
    // consts
    const currentAuthUser = useUser()
    const router = useRouter()
    const localeAdapted = useLocale() as LocaleType
    const [isAllowedToEdit, setIsAllowedToEdit] = useState(false);
    // functions
    // handlers
    useEffect(() => {

        const checkPrivilege = async () => {
            const privilege = await canEditContent(currentAuthUser);
            setIsAllowedToEdit(privilege);
        };

        checkPrivilege();
    }, [currentAuthUser]);
    if (!currentAuthUser && !isAllowedToEdit) return <button className={` bg-buttonContainer  w-fit opacity-0 p-2 cursor-not-allowed rounded-circle`} disabled>Create News</button>




    const handleReturnToNews = () => {
        router.push(routes(localeAdapted).news.root)
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
        <button className={` bg-buttonContainer cursor-pointer w-fit  p-2 rounded-circle`} onClick={() => router.push(routes(localeAdapted).news.create())}>{BUTTON_ADDED_NEWS[localeAdapted]}</button>
    )
}

