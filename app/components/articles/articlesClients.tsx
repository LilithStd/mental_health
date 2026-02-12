'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGlobalStore } from "@/app/store/globalStore";
import { useAuthorizationStore } from "@/app/store/authorizationStore";
import { canEditContent } from "@/app/serverActions/permissions";
import Search from "../shared/search";
import { routes } from "@/app/helpers/helpersFunctions";
import Loading from "../shared/loading";
import Article from "./article";
import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum";
import ArticleClient from "./articleClient";




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
    // functions
    // const CloseFormHandler = () => {
    //     setIsCreateArticleVisible(false);
    // }
    //functions
    // const 

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
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4  mb-4 max-content-main-container`}>
                {!isCreateArticleVisible && articles.map((article) =>
                    // <ArticleServerLikesWrapper key={article.id} article={article} type={ARTICLE_TYPE.MEDIUM} />
                    <ArticleClient key={article.id} article={article} type={ARTICLE_TYPE.MEDIUM} />
                )}
            </div>

        </div>
    )
}
