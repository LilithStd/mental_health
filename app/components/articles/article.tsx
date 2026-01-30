'use client'
import { font, indents, rounded, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles"
import Favorites from "../shared/favorites"
import { useGlobalStore } from "@/app/store/globalStore"
import { use, useEffect, useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { APP_PATH_ROUTER, ARTICLE_TYPE, UPDATE_USER_DATA_TYPE, USER_FAVORITES_ACTION, USER_FAVORITES_TYPE } from "@/app/globalConsts/globalEnum"
import { ArticleType } from "@/app/articles/page"
import { useMockAuthStore } from "@/app/store/mockAuthStore"
import { canEditContent } from "@/app/serverActions/permissions"
import EditActiveIcon from "@/public/icons/EditActive.svg"
import EditInactiveIcon from "@/public/icons/EditInactive.svg"
import { updateArticleAction } from "@/app/serverActions/updateArticle"
import { CROP_CONTAINER_SIZE } from "@/app/globalConsts/globalConsts"
import { cropContent } from "@/app/helpers/helpersFunctions"
import { addUserFavorite } from "@/app/serverActions/usersStorage"
import { useAuthorizationStore } from "@/app/store/authorizationStore"
import AuthorIcon from "@/public/icons/user/User.svg"


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
    const [likesCount, setLikesCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const currentUser = useMockAuthStore((state) => state.currentAuthUser);

    const currentAuthUser = useAuthorizationStore((state) => state.currentAuthUser);
    const updateUserData = useAuthorizationStore((state) => state.updateCurrentAuthUser);
    //state
    // const [isFavorite, setIsFavorite] = useState(false);
    const [pending, startTransition] = useTransition()
    const [isSavedChanges, setIsSavedChanges] = useState(false);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)
    //
    const date = new Date(article.createdAt);

    const formattedDate = date.toLocaleDateString('sv-SE');
    const favorites = currentAuthUser?.favorites.ARTICLES

    // const isFavorite = favorites?.includes(String(article.id)) ?? false
    const router = useRouter();

    // const addToFavoritesHandler = async (userId: number, type: USER_FAVORITES_TYPE, value: string) => {
    //     const res = await fetch('/api/favorites', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ userId, type, value })
    //     });
    //     const data = await res.json();
    //     updateUserData({ id: String(userId), typeUpdate: UPDATE_USER_DATA_TYPE.FAVORITES, dataUpdate: value, favoriteAction: isFavorite ? USER_FAVORITES_ACTION.REMOVE : USER_FAVORITES_ACTION.ADD });
    //     console.log(data);
    // }

    useEffect(() => {
        const checkPrivilege = async () => {
            const privilege = await canEditContent(currentAuthUser);
            setUserPrivilege(privilege);
        };
        checkPrivilege();
    }, [currentAuthUser]);

    useEffect(() => {
        fetch(`/api/articleLikes?articleId=${article.id}`)
            .then(res => res.json())
            .then(data => {
                setLikesCount(data.likesCount)
                if (currentAuthUser && currentAuthUser.id) {
                    setIsLiked(data.likes.includes(currentAuthUser.id))
                }

            })
    }, [article.id, currentAuthUser])
    // functions
    const handleLike = async () => {
        if (!currentAuthUser || !currentAuthUser.id) {
            alert('You must be logged in to like articles.');
            return;
        }
        const res = await fetch('/api/articleLikes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                articleId: article.id,
                userId: currentAuthUser.id,
            }),
        })

        const data = await res.json()

        setLikesCount(data.likesCount)
        setIsLiked(data.isLiked)
    }
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
    // components
    const favoritesComponent = <div className={`flex items-center`}>
        <Favorites isFavorite={isLiked}
            callBackIsFavorite={handleLike}
        />
        <span className="ml-2">{likesCount} {likesCount === 1 ? 'Like' : 'Likes'}</span>
    </div>
    const mainMetaDataArticleComponent =
        <div className={`flex items-top gap-2 p-2`}>
            <div
                className={`
                            flex  flex-col items-center gap-2
                            ${THEME_COLOR_SCHEME[currentTheme].elementAccent}
                            p-2 rounded ${rounded.medium}
                            `}
            >
                <div className={`flex justify-center items-center ${rounded.circle} ${THEME_COLOR_SCHEME[currentTheme].subContainer} p-2`}>
                    <AuthorIcon className="w-30 h-30 fill-current" />
                </div>


            </div>
            <div>
                <h2 className={`flex h-fit text-2xl p-4 ${rounded.medium} ${THEME_COLOR_SCHEME[currentTheme].subContainer} font-bold`}>{article.title}</h2>
                <h3 className={`${font.title.size.small} ${font.title.weigth.thin} ${font.title.curve.italic}`}>
                    by {!article.author || article.author.length === 0 ? "Unknown Author" : article.author}
                </h3>
                <span className={`text-sm ${font.text.size.medium} ${font.title.weigth.thin} ${font.title.curve.italic} opacity-70`}>Created on: {formattedDate}</span>
            </div>

        </div>

    const redirectButtonComponent = <div className={`flex items-center justify-end mt-4`}>
        <button
            className={`${THEME_COLOR_SCHEME[currentTheme].buttonContainer} ${rounded.medium} p-2 cursor-pointer`}
            onClick={() => router.push(`${APP_PATH_ROUTER.ARTICLES}/${article.id}`)}
        >
            read more
        </button>
    </div>
    const interactionBlockComponent =
        <div className={`flex items-center justify-between mt-4`}>
            <div className={`flex justify-between flex-col gap-2  `}>
                {favoritesComponent}
                <span className={`text-sm ${font.text.size.medium} ${font.title.weigth.thin} ${font.title.curve.italic} opacity-50`}>Published on: {formattedDate}</span>

            </div>

            {redirectButtonComponent}
        </div>
    const editArticleComponent =
        <button className={`${THEME_COLOR_SCHEME[currentTheme].buttonContainer} ${rounded.medium} p-2 cursor-pointer`}
            onClick={editArticleHandler}>
            Edit
        </button>;
    const saveArticleComponent =
        <button className={`${THEME_COLOR_SCHEME[currentTheme].buttonContainer} ${rounded.medium} p-2 cursor-pointer`}
            onClick={() => {
                startTransition(() =>
                    updateArticleAction(article.id, editTitle, editContent)
                )
                setIsEditContent(false)
                setIsEditTitle(false)
                setIsEditArticle(false)
                setIsChanged(false)

            }}
            disabled={pending}>
            {pending ? 'Saving...' : 'Save'}
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
            {isChanged ? saveArticleComponent : editArticleComponent}
            {isEditArticle && cancelEditArticleComponent}
        </div>
    const mediumArticleComponent =
        <div>
            <div className={`flex gap-4  w-full rounded ${rounded.medium} ${THEME_COLOR_SCHEME[currentTheme].container} mb-2`}>
                {mainMetaDataArticleComponent}

            </div>
            {/* <div>
                <h2>Author: {!article.author || article.author === '' ? 'unknown' : article.author}</h2>
            </div> */}
            <div>
                <p>{cropContent(article.content, CROP_CONTAINER_SIZE.MEDIUM)}</p>
            </div>
            {/* <div className={`flex justify-between items-center mt-4 `}>
                <span className={`text-sm ${indents.text} ${rounded.medium} ${THEME_COLOR_SCHEME[currentTheme].elementAccent} flex p-2 `}>{formattedDate}</span>
            </div> */}
            {/* <div className={`flex items-center justify-between mt-4`}>
                {favoritesComponent}
                {redirectButtonComponent}
            </div> */}
            {interactionBlockComponent}
            {/* <div className={`flex items-center justify-between mt-4`}>
                {favoritesComponent}
                <button
                    className={`${THEME_COLOR_SCHEME[currentTheme].buttonContainer} ${rounded.medium} p-2 cursor-pointer`}
                    onClick={() => router.push(`${APP_PATH_ROUTER.ARTICLES}/${article.id}`)}
                >
                    read more
                </button>

            </div> */}

        </div>

    const previewArticleComponent =
        <div
            key={article.id}
            className={`
    grid grid-cols-[1fr_1fr] gap-4 mb-4 p-2
    ${THEME_COLOR_SCHEME[currentTheme].container}
    ${rounded.high}
  `}
        >
            {/* <div
                className={`
      flex m-2 flex-col items-center gap-2
      ${THEME_COLOR_SCHEME[currentTheme].elementAccent}
      p-2 rounded ${rounded.high}
    `}
            >
                <AuthorIcon className="w-30 h-30 fill-current" />
                <h3 className={`${font.title.size.small} ${font.title.weigth.thin} ${font.title.curve.italic}`}>
                    by {!article.author || article.author.length === 0 ? "Unknown Author" : article.author}
                </h3>
            </div> */}
            {mainMetaDataArticleComponent}

            <div className="flex flex-col gap-2 p-2">
                <p className={`${font.text.size.medium} ${THEME_COLOR_SCHEME[currentTheme].text}`}>
                    {cropContent(article.content, CROP_CONTAINER_SIZE.SMALL)}

                </p>
                {interactionBlockComponent}
            </div>

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
        <div className={`flex flex-col items-center p-10  gap-4 mb-4`}>
            {isEditContent ? (
                <textarea
                    value={editContent}
                    onChange={editContentHandler}
                    className="
                                w-full
                                min-h-[300px]
                                resize-none
                                border-none
                                outline-none
                                bg-transparent
                                text-base
                                leading-relaxed
                                "
                />
            ) : (
                <p className="whitespace-pre-wrap leading-relaxed">
                    {editContent}
                </p>
            )}

            {isEditContent && isChanged ? <EditActiveIcon className={`inline-block w-6 h-6 mb-4 cursor-pointer`} onClick={() => { setIsEditContent(false) }} /> : isEditArticle && <EditInactiveIcon onClick={() => { setIsEditContent(true) }} className={`inline-block w-6 h-6 mb-4 cursor-pointer`} />}
        </div>
        {favoritesComponent}
        <div>
            {userPrivilege &&
                editArticleButtonsComponent
            }
        </div>
        <span className={`text-sm ${font.text.size.medium} ${font.title.weigth.thin} ${font.title.curve.italic} opacity-50`}>Published  on: {formattedDate}</span>
    </div>;
    // 
    return (
        <article key={article.id} className={`${THEME_COLOR_SCHEME[currentTheme].subContainer} p-4 ${rounded.high} w-full  flex flex-col gap-2`}>
            {typeArticle === ARTICLE_TYPE.PREVIEW && previewArticleComponent}
            {typeArticle === ARTICLE_TYPE.MEDIUM && mediumArticleComponent}
            {typeArticle === ARTICLE_TYPE.FULL && fullArticleComponent}
        </article>

    )
}
