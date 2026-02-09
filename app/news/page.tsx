'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Search from "../components/shared/search";
import News, { NewsType } from "../components/news/news";
import { NEWS_TYPE } from "../globalConsts/globalEnum";
import { canEditContent } from "../serverActions/permissions";
import { useAuthorizationStore } from "../store/authorizationStore";
import CreateNews from "../components/news/createNews";
import { routes } from "../helpers/helpersFunctions";


export default function AllNews() {
    // stores
    const currentAuthUser = useAuthorizationStore((state) => state.currentAuthUser);
    // state
    const [userPrivilege, setUserPrivilege] = useState(false);
    const [isCreateArticleVisible, setIsCreateArticleVisible] = useState(false);
    const [news, setNews] = useState<NewsType[]>([])
    const [loading, setLoading] = useState(true)
    // functions
    // consts
    const router = useRouter()

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
        <div className={`flex flex-col bg-mainContainer rounded-medium flex-1 indents-main-container  items-center `}>
            {/* <Search /> */}
            {loading ? (<div>Loading...</div>
            ) : (
                <div className={`flex flex-col items-center gap-4 p-4 max-content-main-container`}>
                    <div>
                        {userPrivilege && (
                            <button className={`p-2 mb-4 bg-buttonContainer rounded-medium`} onClick={() => router.push(routes.news.create())}>
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
