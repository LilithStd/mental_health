'use client';
import { useAuth } from '@/app/authClientWrapper';
import { routes } from '@/app/helpers/helpersFunctions'
import { useLocale } from '@/app/hooks/useLocale';
import { canEditContent } from '@/app/serverActions/permissions';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function NewArticleButton() {
    const route = useRouter()
    const currentAuthUser = useAuth()
    const localeAdapted = useLocale()
    const [isAllowedToEdit, setIsAllowedToEdit] = useState(false);

    useEffect(() => {

        const checkPrivilege = async () => {
            const privilege = await canEditContent(currentAuthUser);
            setIsAllowedToEdit(privilege);
        };

        checkPrivilege();
    }, [currentAuthUser]);

    if (!isAllowedToEdit) {
        return <div>
            <button className={` bg-buttonContainer mb-4 w-fit opacity-0 p-2 cursor-not-allowed rounded-circle`} disabled>New Articles</button>
        </div>
    }

    return (

        <button className={` bg-buttonContainer mb-4 w-fit  p-2 cursor-pointer rounded-circle`} onClick={() => route.push(routes(localeAdapted).articles.create())}>New Articles</button>

    )
}
