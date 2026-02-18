'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import News, { NewsType } from "../components/news/news";
import { NEWS_TYPE } from "../globalConsts/globalEnum";
import { canEditContent } from "../serverActions/permissions";
import CreateNews from "../components/news/createNews";
import { routes } from "../helpers/helpersFunctions";
import Loading from "../components/shared/loading";
import { useAuth } from "../authClientWrapper";


export default function AllNews() {
    // stores
    const currentAuthUser = useAuth()
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
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
            {/* <Search /> */}
            {loading ? <Loading fullScreen={true} /> : (
                <div className={`flex  gap-4 p-4 flex-col flex-1 max-w-6xl items-center  rounded-large bg-mainContainer `}>

                    {userPrivilege && (
                        <button className={`bg-buttonContainer w-fit flex p-2 justify-center items-center rounded-large`} onClick={() => router.push(routes.news.create())}>
                            Create News
                        </button>
                    )}
                    {isCreateArticleVisible && <CreateNews />}

                    {news.map((newsItem) => (
                        <News key={newsItem.id} news={newsItem} typeNews={NEWS_TYPE.MEDIUM} />
                    ))}
                </div>
            )}
        </div>
    )
}
