'use client';

import { useEffect, useState } from "react";
import { ROLE_AUTH_USER_PRIVILEGE } from "../globalConsts/globalEnum";
import { indents, rounded, THEME_COLOR_SCHEME } from "../globalConsts/globalStyles";
import { canEditContent } from "../serverActions/permissions";
import { useGlobalStore } from "../store/globalStore";
import { useMockAuthStore } from "../store/mockAuthStore";
import Search from "../components/shared/search";
import CreateArticle from "../components/articles/createArticle";

export default function Articles() {
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
    const currentAuthUser = useMockAuthStore((state) => state.currentAuthUser);
    const [userPrivilege, setUserPrivilege] = useState(false);
    const [isCreateArticleVisible, setIsCreateArticleVisible] = useState(false);
    const CloseFormHandler = () => {
        setIsCreateArticleVisible(false);
    }


    useEffect(() => {
        const checkPrivilege = async () => {
            const privilege = await canEditContent(currentAuthUser);
            setUserPrivilege(privilege);
        };
        checkPrivilege();
    }, [currentAuthUser]);
    return (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium} flex-1 ${indents.container.main} items-center text-center`}>
            <Search />
            {currentAuthUser && userPrivilege && (
                <div className={`mt-4 mb-4 bg-amber-400 p-2 rounded ${rounded.medium}`}>
                    <button onClick={() => setIsCreateArticleVisible(true)}>New Articles</button>
                    {isCreateArticleVisible && <CreateArticle onClose={CloseFormHandler} />}
                </div>
            )}
        </div>
    )
}
