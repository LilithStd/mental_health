'use client';

import { useEffect, useState } from "react";
import { ROLE_AUTH_USER_PRIVILEGE } from "../globalConsts/globalEnum";
import { indents, rounded, THEME_COLOR_SCHEME } from "../globalConsts/globalStyles";
import { canEditContent } from "../serverActions/permissions";
import { useGlobalStore } from "../store/globalStore";
import { useMockAuthStore } from "../store/mockAuthStore";
import Search from "../components/shared/search";
import CreateArticle from "../components/articles/createArticle";
import Article from "../components/articles/article";

type Article = {
    id: number
    title: string
    author: string
    content: string
    createdAt: string
}

export default function Articles() {
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
    const currentAuthUser = useMockAuthStore((state) => state.currentAuthUser);
    const [userPrivilege, setUserPrivilege] = useState(false);
    const [isCreateArticleVisible, setIsCreateArticleVisible] = useState(false);
    const [articles, setArticles] = useState<Article[]>([])
    const [loading, setLoading] = useState(true)
    const CloseFormHandler = () => {
        setIsCreateArticleVisible(false);
    }



    useEffect(() => {
        fetch('/api/article')
            .then(res => res.json())
            .then(data => {
                setArticles(data.articles)
                setLoading(false)
            })
    }, [])




    useEffect(() => {
        const checkPrivilege = async () => {
            const privilege = await canEditContent(currentAuthUser);
            setUserPrivilege(privilege);
        };
        checkPrivilege();
    }, [currentAuthUser]);

    if (loading) {
        return <div>Загрузка...</div>
    }
    return (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium} flex-1 ${indents.container.main} items-center text-center`}>
            <Search />
            {currentAuthUser && userPrivilege && (
                <div>

                    {
                        !isCreateArticleVisible && <button className={`mt-4 mb-4 ${THEME_COLOR_SCHEME[currentTheme].buttonContainer} p-2 rounded ${rounded.medium}`} onClick={() => setIsCreateArticleVisible(true)}>New Articles</button>
                    }


                    {isCreateArticleVisible && <CreateArticle onClose={CloseFormHandler} />}
                </div>

            )}
            {!isCreateArticleVisible && articles.map((article) =>
                <Article
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    author={article.author}
                    content={article.content}
                    createdAt={article.createdAt} />)}
        </div>
    )
}
