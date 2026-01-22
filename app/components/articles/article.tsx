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
import EditActiveIcon from "@/public/icons/EditActive.svg"
import EditInactiveIcon from "@/public/icons/EditInactive.svg"


interface ArticleProps {
    article: ArticleType
    typeArticle: ARTICLE_TYPE
}


export default function Article({ article, typeArticle }: ArticleProps) {
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    const [isEditArticle, setIsEditArticle] = useState(false);
    const [isChanged, setIsChanged] = useState(false);
    const [userPrivilege, setUserPrivilege] = useState(false);
    const [editTitle, setEditTitle] = useState(article.title);
    const [isEditTtitle, setIsEditTitle] = useState(false);
    const [editContent, setEditContent] = useState(article.content);
    const [isEditContent, setIsEditContent] = useState(false);
    const [isEditAuthor, setIsEditAuthor] = useState(false);
    const [editAuthor, setEditAuthor] = useState(article.author);
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
    const editTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTitle(e.target.value);
        setIsChanged(true);
    }
    const editAuthorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditAuthor(e.target.value);
        setIsChanged(true);
    }
    const editContentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditContent(e.target.value);
        setIsChanged(true);
    }

    console.log('content status:', isEditContent);
    // 
    // components
    const editArticleComponent =
        <button className={`${THEME_COLOR_SCHEME[currentTheme].buttonContainer} ${rounded.medium} p-2 cursor-pointer`}
            onClick={editArticleHandler}>
            Edit
        </button>;
    const cancelEditArticleComponent =
        <button className={`${THEME_COLOR_SCHEME[currentTheme].buttonContainer} ${rounded.medium} p-2 cursor-pointer ${!isChanged ? `${THEME_COLOR_SCHEME[currentTheme].inactiveElement}` : ''}`}
            onClick={() => (
                setIsEditArticle(false),
                setIsChanged(false),
                setIsEditArticle(false),
                setIsEditAuthor(false),
                setIsEditContent(false),
                setIsEditTitle(false),
                setEditTitle(article.title),
                setEditContent(article.content),
                setEditAuthor(article.author)
            )
            }>
            Cancel
        </button >;
    const editArticleButtonsComponent =
        <div className={`flex justify-end gap-4 mt-4`}>
            {editArticleComponent}
            {isEditArticle && cancelEditArticleComponent}
        </div>
    const previewArticleComponent =
        <div>
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
        </div>
    const fullArticleComponent = <div>
        <div className={`flex items-center justify-center gap-4`}>
            {isEditTtitle ? <input name="title" type="text" value={editTitle} onChange={editTitleHandler} className="text-3xl font-bold" /> : <h1 className="text-3xl font-bold">{editTitle}</h1>}
            {isEditTtitle && isChanged ? <EditActiveIcon className={`inline-block w-6 h-6 mb-4 cursor-pointer`} onClick={() => { setIsEditTitle(false) }} /> : isEditArticle && <EditInactiveIcon onClick={() => { setIsEditTitle(true) }} className={`inline-block w-6 h-6 mb-4 cursor-pointer`} />}
        </div>
        <div className={`flex items-center justify-center gap-4 mb-4`}>
            {isEditAuthor ? <input name="author" type="text" value={editAuthor} onChange={editAuthorHandler} className="text-xl " /> : <h2 className="text-xl">By {editAuthor}</h2>}
            {isEditAuthor && isChanged ? <EditActiveIcon className={`inline-block w-6 h-6 mb-4 cursor-pointer`} onClick={() => { setIsEditAuthor(false) }} /> : isEditArticle && <EditInactiveIcon onClick={() => { setIsEditAuthor(true) }} className={`inline-block w-6 h-6 mb-4 cursor-pointer`} />}
        </div>
        <div className={`flex flex-col items-center justify-center gap-4 mb-4`}>
            {isEditContent ? <textarea name="content" value={editContent} onChange={editContentHandler} className="" /> : <p className="mb-4">{editContent}</p>}
            {isEditContent && isChanged ? <EditActiveIcon className={`inline-block w-6 h-6 mb-4 cursor-pointer`} onClick={() => { setIsEditContent(false) }} /> : isEditArticle && <EditInactiveIcon onClick={() => { setIsEditContent(true) }} className={`inline-block w-6 h-6 mb-4 cursor-pointer`} />}
        </div>
        <Favorites isFavorite={isFavorite} callBackIsFavorite={() => setIsFavorite(!isFavorite)} />
        <div>
            {userPrivilege &&
                editArticleButtonsComponent
            }
        </div>
        <span className="text-sm text-gray-500">Published on: {formattedDate}</span>
    </div>;

    // 

    return (
        <article key={article.id} className={`${THEME_COLOR_SCHEME[currentTheme].subContainer} p-4 m-4 ${rounded.high} w-full max-w-2xl flex flex-col gap-2`}>
            {typeArticle === ARTICLE_TYPE.PREVIEW ? previewArticleComponent : fullArticleComponent}
        </article>

    )
}
