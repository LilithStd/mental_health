'use client'
import { useEffect, useState, use } from 'react'
import { ArticleType } from '../page'
import Article from '@/app/components/articles/article'
import { ARTICLE_TYPE } from '@/app/globalConsts/globalEnum'
import { THEME_COLOR_SCHEME, rounded, indents } from '@/app/globalConsts/globalStyles'
import { useGlobalStore } from '@/app/store/globalStore'
import { canEditContent } from '@/app/serverActions/permissions'
import { useMockAuthStore } from '@/app/store/mockAuthStore'

export default function ArticlePage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = use(params)
    const [article, setArticle] = useState<ArticleType | null>(null)
    const [error, setError] = useState(false)
    const [userPrivilege, setUserPrivilege] = useState(false);
    const currentAuthUser = useMockAuthStore((state) => state.currentAuthUser);

    // components


    // 
    useEffect(() => {
        const checkPrivilege = async () => {
            const privilege = await canEditContent(currentAuthUser);
            setUserPrivilege(privilege);
        };
        checkPrivilege();
    }, [currentAuthUser]);

    useEffect(() => {
        fetch(`/api/articles?id=${id}`)
            .then(r => {
                if (!r.ok) {
                    setError(true)
                    return null
                }
                return r.json()
            })
            .then(data => {
                if (data) {
                    setArticle(data.article)
                }
            })
    }, [id])

    // const toggleFavorite = async () => {
    //     await fetch('/api/users/favorites', {
    //         method: isFavorite ? 'DELETE' : 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             userId: currentUser.id,
    //             type: 'ARTICLES',
    //             value: article.id
    //         })
    //     })

    //     // обновить локальный стор или refetch
    // }

    if (error) {
        return <div>Статья не найдена</div>
    }

    if (!article) {
        return <div>Загрузка...</div>
    }

    return (
        <div className={`flex   flex-col bg-mainContainer ${rounded.medium} flex-1 ${indents.container.main} items-center `}>
            <Article article={article} typeArticle={ARTICLE_TYPE.FULL} />
        </div>
    )
}
