'use client';

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalStore } from "@/app/store/globalStore";
import { useAuthorizationStore } from "@/app/store/authorizationStore";
import { canEditContent } from "@/app/serverActions/permissions";
import Search from "../shared/search";
import { routes } from "@/app/helpers/helpersFunctions";
import Loading from "../shared/loading";
import Article from "./article";
import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum";




export type ArticleType = {
    id: number
    title: string
    author: string
    content: string
    createdAt: string
}

interface ArticlesClientProps {
    initialArticles: ArticleType[]
}

export default function ArticlesClient({ initialArticles }: ArticlesClientProps) {
    //stores
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
    const currentAuthUser = useAuthorizationStore((state) => state.currentAuthUser);
    // state
    const [userPrivilege, setUserPrivilege] = useState(false);
    const [isCreateArticleVisible, setIsCreateArticleVisible] = useState(false);
    // const [articles, setArticles] = useState<ArticleType[]>([])
    const [searchedArticles, setSearchedArticles] = useState<ArticleType[]>([])
    const [isSearchActive, setIsSearchActive] = useState(false)
    // const [loading, setLoading] = useState(false)
    // functions
    const CloseFormHandler = () => {
        setIsCreateArticleVisible(false);
    }
    console.log('ArticlesClient: initialArticles', initialArticles);
    // const articles = initialArticles
    //functions
    // const 
    const route = useRouter()
    // useEffect(() => {
    //     fetch('/api/articles')
    //         .then(res => res.json())
    //         .then(data => {
    //             setArticles(data.articles)
    //             setLoading(false)
    //         })
    // }, [])
    const articles = initialArticles
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
                        !isCreateArticleVisible && <button className={` bg-buttonContainer p-2 rounded-medium`} onClick={() => route.push(routes.articles.create())}>New Articles</button>
                    }
                </div>

            )}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4  mb-4 max-content-main-container`}>
                {!isCreateArticleVisible && !isSearchActive && articles.map((article) =>
                    // <ArticleServerLikesWrapper key={article.id} article={article} type={ARTICLE_TYPE.MEDIUM} />
                    <Article
                        key={article.id}
                        article={article}
                        initialLikesCount={0}
                        typeArticle={ARTICLE_TYPE.MEDIUM}
                    />
                )}
                {isSearchActive && searchedArticles.map((article) =>
                    // <ArticleServerLikesWrapper key={article.id} article={article} type={ARTICLE_TYPE.MEDIUM} />
                    <Article
                        key={article.id}
                        article={article}
                        initialLikesCount={0}
                        typeArticle={ARTICLE_TYPE.MEDIUM}
                    />
                )}
            </div>

        </div>
    )
}
