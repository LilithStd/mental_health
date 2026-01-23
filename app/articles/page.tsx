'use client';

import { use, useEffect, useState } from "react";
import { ARTICLE_TYPE, ROLE_AUTH_USER_PRIVILEGE } from "../globalConsts/globalEnum";
import { indents, rounded, THEME_COLOR_SCHEME } from "../globalConsts/globalStyles";
import { canEditContent } from "../serverActions/permissions";
import { useGlobalStore } from "../store/globalStore";
import { useMockAuthStore } from "../store/mockAuthStore";
import Search from "../components/shared/search";
import CreateArticle from "../components/articles/createArticle";
import Article from "../components/articles/article";

export type ArticleType = {
    id: number
    title: string
    author: string
    content: string
    createdAt: string
}

export default function Articles() {
    //stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
    const currentAuthUser = useMockAuthStore((state) => state.currentAuthUser);
    // state
    const [userPrivilege, setUserPrivilege] = useState(false);
    const [isCreateArticleVisible, setIsCreateArticleVisible] = useState(false);
    const [articles, setArticles] = useState<ArticleType[]>([])
    const [searchedArticles, setSearchedArticles] = useState<ArticleType[]>([])
    const [isSearchActive, setIsSearchActive] = useState(false)
    const [loading, setLoading] = useState(true)
    // functions
    const CloseFormHandler = () => {
        setIsCreateArticleVisible(false);
    }



    useEffect(() => {
        fetch('/api/articles')
            .then(res => res.json())
            .then(data => {
                setArticles(data.articles)
                setLoading(false)
            })
    }, [])

    // console.log('Current Auth User in Articles Page:', currentAuthUser);
    // console.log('searchedArticles:', searchedArticles);
    useEffect(() => {
        const checkPrivilege = async () => {
            const privilege = await canEditContent(currentAuthUser);
            setUserPrivilege(privilege);
        };
        checkPrivilege();
    }, [currentAuthUser]);
    // if (loading) {
    //     return <div>Загрузка...</div>
    // }
    return (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium} flex-1 ${indents.container.main} items-center `}>
            <Search callBackResultAfterSearch={setSearchedArticles} isSearchActive={setIsSearchActive} arrayForSearch={articles} />
            {currentAuthUser && userPrivilege && (
                <div>

                    {
                        !isCreateArticleVisible && <button className={`mt-4 mb-4 ${THEME_COLOR_SCHEME[currentTheme].buttonContainer} p-2 rounded ${rounded.medium}`} onClick={() => setIsCreateArticleVisible(true)}>New Articles</button>
                    }


                    {isCreateArticleVisible && <CreateArticle onClose={CloseFormHandler} />}
                </div>

            )}
            {loading ? <div>Loading...</div> : !isCreateArticleVisible && !isSearchActive && articles.map((article) =>
                <Article
                    key={article.id}
                    article={article}
                    typeArticle={ARTICLE_TYPE.PREVIEW}
                />)}
            {!loading && isSearchActive && searchedArticles.map((article) =>
                <Article
                    key={article.id}
                    article={article}
                    typeArticle={ARTICLE_TYPE.PREVIEW}
                />)}
        </div>
    )
}
