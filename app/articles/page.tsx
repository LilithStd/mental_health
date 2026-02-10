'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ARTICLE_TYPE, ROLE_AUTH_USER_PRIVILEGE } from "../globalConsts/globalEnum";
import { indents, rounded, sizes, THEME_COLOR_SCHEME } from "../globalConsts/globalStyles";
import { canEditContent } from "../serverActions/permissions";
import { useGlobalStore } from "../store/globalStore";
import { useMockAuthStore } from "../store/mockAuthStore";
import Search from "../components/shared/search";
import CreateArticle from "../components/articles/createArticle";
import Article from "../components/articles/article";
import { useAuthorizationStore } from "../store/authorizationStore";
import { routes } from "../helpers/helpersFunctions";
import Loading from "../components/shared/loading";

export type ArticleType = {
    id: number
    title: string
    author: string
    content: string
    createdAt: string
}

export default function Articles() {
    //stores
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
    const currentAuthUser = useAuthorizationStore((state) => state.currentAuthUser);
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
    //functions
    // const 
    const route = useRouter()



    useEffect(() => {
        fetch('/api/articles')
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
    return (
        <div className={`flex flex-col  bg-mainContainer rounded-medium flex-1 indents-main-container  gap-2 items-center `}>
            <Search callBackResultAfterSearch={setSearchedArticles} isSearchActive={setIsSearchActive} arrayForSearch={articles} />
            {currentAuthUser && userPrivilege && (
                <div>

                    {
                        !isCreateArticleVisible && <button className={` bg-buttonContainer p-2 rounded ${rounded.medium}`} onClick={() => route.push(routes.articles.create())}>New Articles</button>
                    }
                </div>

            )}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4  mb-4 ${sizes.width.maxWidth}`}>
                {loading ? <Loading fullScreen={true} /> : !isCreateArticleVisible && !isSearchActive && articles.map((article) =>
                    <Article
                        key={article.id}
                        article={article}
                        typeArticle={ARTICLE_TYPE.MEDIUM}
                    />)}
                {!loading && isSearchActive && searchedArticles.map((article) =>
                    <Article
                        key={article.id}
                        article={article}
                        typeArticle={ARTICLE_TYPE.MEDIUM}
                    />)}
            </div>

        </div>
    )
}
