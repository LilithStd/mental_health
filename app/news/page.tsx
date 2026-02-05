'use client';

import { useEffect, useState } from "react";
import Search from "../components/shared/search";
import { THEME_COLOR_SCHEME, rounded, indents } from "../globalConsts/globalStyles";
import { useGlobalStore } from "../store/globalStore";
import News, { NewsType } from "../components/news/news";
import { NEWS_TYPE } from "../globalConsts/globalEnum";
import { canEditContent } from "../serverActions/permissions";
import { useAuthorizationStore } from "../store/authorizationStore";
import CreateNews from "../components/news/createNews";


export default function AllNews() {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    const currentAuthUser = useAuthorizationStore((state) => state.currentAuthUser);
    // state
    const [userPrivilege, setUserPrivilege] = useState(false);
    const [isCreateArticleVisible, setIsCreateArticleVisible] = useState(false);
    const [news, setNews] = useState<NewsType[]>([])
    const [loading, setLoading] = useState(true)
    // functions

    useEffect(() => {
        fetch('/api/news')
            .then(res => res.json())
            .then(data => {
                setNews(data.news)
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
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium} flex-1 ${indents.container.main}  items-center text-center`}>
            {/* <Search /> */}
            {loading ? (<div>Loading...</div>
            ) : (
                <div>
                    <div>
                        {userPrivilege && (
                            <button className={`p-2 mb-4 ${THEME_COLOR_SCHEME[currentTheme].buttonContainer} ${rounded.medium}`} onClick={() => setIsCreateArticleVisible(true)}>
                                Create News
                            </button>
                        )}
                        {isCreateArticleVisible && <CreateNews />}
                    </div>
                    {news.map((newsItem) => (
                        <News key={newsItem.id} news={newsItem} typeNews={NEWS_TYPE.PREVIEW} />
                    ))}
                </div>
            )}
        </div>
    )
}
