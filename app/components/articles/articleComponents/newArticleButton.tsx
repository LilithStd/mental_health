'use client';
import { routes } from '@/app/helpers/helpersFunctions'
import { canEditContent } from '@/app/serverActions/permissions';
import { useAuthorizationStore } from '@/app/store/authorizationStore';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function NewArticleButton() {
    const route = useRouter()
    const currentAuthUser = useAuthorizationStore((state) => state.currentAuthUser);
    const [isAllowedToEdit, setIsAllowedToEdit] = useState(false);
    useEffect(() => {
        const checkPrivilege = async () => {
            const privilege = await canEditContent(currentAuthUser);
            setIsAllowedToEdit(privilege);
        };
        checkPrivilege();
    }, [currentAuthUser]);
    console.log(isAllowedToEdit)
    if (!isAllowedToEdit) {
        return null; // or return a message indicating lack of permissions
    }
    return (

        <button className={` bg-buttonContainer  p-2 rounded-medium`} onClick={() => route.push(routes.articles.create())}>New Articles</button>

    )
}
