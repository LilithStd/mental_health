'use client';
import { routes } from '@/app/helpers/helpersFunctions'
import { canEditContent } from '@/app/serverActions/permissions';
import { useAuthorizationStore } from '@/app/store/authorizationStore';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

interface NewArticleButtonProps {
    callBackCheckUserPrivilege: (privilege: boolean) => void
}

export default function NewArticleButton({ callBackCheckUserPrivilege }: NewArticleButtonProps) {
    const route = useRouter()
    const currentAuthUser = useAuthorizationStore((state) => state.currentAuthUser);
    useEffect(() => {
        const checkPrivilege = async () => {
            const privilege = await canEditContent(currentAuthUser);
            callBackCheckUserPrivilege(privilege);
        };
        checkPrivilege();
    }, [currentAuthUser]);
    return (
        <button className={` bg-buttonContainer p-2 rounded-medium`} onClick={() => route.push(routes.articles.create())}>New Articles</button>
    )
}
