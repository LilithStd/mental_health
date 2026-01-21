'use client'
import { rounded, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles"
import Favorites from "../shared/favorites"
import { useGlobalStore } from "@/app/store/globalStore"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { APP_PATH_ROUTER, ARTICLE_TYPE } from "@/app/globalConsts/globalEnum"
import { ArticleType } from "@/app/articles/page"
import { useMockAuthStore } from "@/app/store/mockAuthStore"
import { canEditContent } from "@/app/serverActions/permissions"

interface ArticleProps {
    article: ArticleType
    typeArticle: ARTICLE_TYPE
}


export default function Article({ article, typeArticle }: ArticleProps) {
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    const [isEditArticle, setIsEditArticle] = useState(false)
    const [userPrivilege, setUserPrivilege] = useState(false);
    const currentAuthUser = useMockAuthStore((state) => state.currentAuthUser);
    //state
    const [isFavorite, setIsFavorite] = useState(false);
    //
    const date = new Date(article.createdAt);

    const formattedDate = date.toLocaleDateString('sv-SE');

    const router = useRouter();
    useEffect(() => {
        const checkPrivilege = async () => {
            const privilege = await canEditContent(currentAuthUser);
            setUserPrivilege(privilege);
        };
        checkPrivilege();
    }, [currentAuthUser]);

    // functions
    const editArticleHandler = () => {
        setIsEditArticle(true);
    }
    // 
    // components
    const editArticleComponent = <div>
        <button>Edit</button>
    </div>;
    const previewArticleComponent =
        <>
            <div>
                <h1 className="text-2xl font-bold mb-2">{article.title}</h1><h2>{article.title}</h2>
            </div>
            <div>
                <h2>{article.author}</h2>
            </div>
            <div>
                <p>{article.content}</p>
            </div>

            <span>{formattedDate}</span>
            <div>
                <button
                    className={`${THEME_COLOR_SCHEME[currentTheme].buttonContainer} ${rounded.medium} p-2 cursor-pointer`}
                    onClick={() => router.push(`${APP_PATH_ROUTER.ARTICLES}/${article.id}`)}
                >
                    read more
                </button>
            </div>
            <Favorites isFavorite={isFavorite} callBackIsFavorite={() => setIsFavorite(!isFavorite)} />
        </>
    const fullArticleComponent = <div>
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        <h2 className="text-xl mb-2">By {article.author}</h2>
        <p className="mb-4">{article.content}</p>
        <span className="text-sm text-gray-500">Published on: {formattedDate}</span>
    </div>;

    // 

    return (
        <article key={article.id} className={`${THEME_COLOR_SCHEME[currentTheme].subContainer} p-4 m-4 rounded-md w-full max-w-2xl flex flex-col gap-2`}>
            {typeArticle === ARTICLE_TYPE.PREVIEW ? previewArticleComponent : fullArticleComponent}
        </article>

    )
}
