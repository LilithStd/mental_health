'use client'
import { font } from "@/app/globalConsts/globalStyles"
import Favorites from "../shared/favorites"
import { useEffect, useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { APP_PATH_ROUTER, ARTICLE_TYPE } from "@/app/globalConsts/globalEnum"
import { canEditContent } from "@/app/serverActions/permissions"
import EditActiveIcon from "@/public/icons/EditActive.svg"
import EditInactiveIcon from "@/public/icons/EditInactive.svg"
import { updateArticleAction } from "@/app/serverActions/updateArticle"
import { CROP_CONTAINER_SIZE } from "@/app/globalConsts/globalConsts"
import { cropContent } from "@/app/helpers/helpersFunctions"
import { useAuthorizationStore } from "@/app/store/authorizationStore"
import AuthorIcon from "@/public/icons/user/User.svg"
import { ArticleType } from "./articlesClients"


interface ArticleProps {
    article: ArticleType
    initialLikesCount: number
    typeArticle?: ARTICLE_TYPE
}


export default function Article({ article, typeArticle, initialLikesCount }: ArticleProps) {
    const [isEditArticle, setIsEditArticle] = useState(false);
    const [isChanged, setIsChanged] = useState(false);
    const [userPrivilege, setUserPrivilege] = useState(false);
    const [editTitle, setEditTitle] = useState(article.title);
    const [isEditTtitle, setIsEditTitle] = useState(false);
    const [editContent, setEditContent] = useState(article.content);
    const [isEditContent, setIsEditContent] = useState(false);
    const [isEditAuthor, setIsEditAuthor] = useState(false);
    const [editAuthor, setEditAuthor] = useState(article.author);
    const [likesCount, setLikesCount] = useState(initialLikesCount);
    const [isLiked, setIsLiked] = useState(false);
    // const currentUser = useMockAuthStore((state) => state.currentAuthUser);
    // console.log(initialLikesCount, 'initialLikesCount in Article component');
    const currentAuthUser = useAuthorizationStore((state) => state.currentAuthUser);
    const [pending, startTransition] = useTransition()
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

    // useEffect(() => {
    //     fetch(`/api/articleLikes?articleId=${article.id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setLikesCount(data.likesCount)
    //             if (currentAuthUser && currentAuthUser.id) {
    //                 setIsLiked(data.likes.includes(currentAuthUser.id))
    //             }

    //         })
    // }, [article.id, currentAuthUser])

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
        router.refresh()
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
                            bg-accentElement
                            p-2
                            rounded-medium 
                            `}
            >
                <div className={`flex justify-center items-center rounded-circle bg-subContainer p-2`}>
                    <AuthorIcon className="w-30 h-30 fill-current" />
                </div>
            </div>
            <div>
                {isEditArticle && isEditTtitle ? <input name="title" type="text" value={editTitle} onChange={editTitleHandler} className="text-3xl font-bold" /> : <h2 className={`flex h-fit text-2xl p-4 rounded-medium bg-subContainer font-bold`}>{article.title}</h2>}
                {isEditTtitle && isChanged ? <EditActiveIcon className={`inline-block w-6 h-6 mb-4 cursor-pointer`} onClick={() => { setIsEditTitle(false) }} /> : isEditArticle && <EditInactiveIcon onClick={() => { setIsEditTitle(true) }} className={`inline-block w-6 h-6 mb-4 cursor-pointer`} />}
                {isEditAuthor ? <input name="author" type="text" value={editAuthor} onChange={editAuthorHandler} className="text-xl " /> : <h3 className={`${font.title.size.small} ${font.title.weigth.thin} ${font.title.curve.italic}`}>
                    by {!article.author || article.author.length === 0 ? "Unknown Author" : article.author}
                </h3>}
                <span className={`text-sm ${font.text.size.medium} ${font.title.weigth.thin} ${font.title.curve.italic} opacity-70`}>Created on: {formattedDate}</span>
            </div>

        </div>

    const redirectButtonComponent = <div className={`flex items-center justify-end mt-4`}>
        <button
            className={`bg-buttonContainer rounded-medium p-2 cursor-pointer`}
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
        <button className={`bg-buttonContainer rounded-medium p-2 cursor-pointer`}
            onClick={editArticleHandler}>
            Edit
        </button>;
    const saveArticleComponent =
        <button className={`bg-buttonContainer rounded-medium p-2 cursor-pointer`}
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
        <button className={`bg-buttonContainer rounded-medium p-2 cursor-pointer ${!isChanged ? `bg-inactiveElement` : ''}`}
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
        <div className={`flex flex-col mb-4 p-2`}>
            <div className={`flex  w-full rounded rounded-medium bg-mainContainer`}>
                {mainMetaDataArticleComponent}

            </div>
            <div>
                <p>{cropContent(article.content, CROP_CONTAINER_SIZE.MEDIUM)}</p>
            </div>
            {interactionBlockComponent}
        </div>

    const previewArticleComponent =
        <div
            key={article.id}
            className={`
            grid grid-cols-[1fr_1fr] mb-4 p-2
            bg-mainContainer
            rounded-medium
        `}
        >
            {mainMetaDataArticleComponent}

            <div className="flex flex-col gap-2 p-2">
                <p className={`${font.text.size.medium} `}>
                    {cropContent(article.content, CROP_CONTAINER_SIZE.SMALL)}

                </p>
                {interactionBlockComponent}
            </div>

        </div>
    const fullArticleComponent =
        <div className={`flex flex-col max-w-6xl mb-4 p-2`}>
            <div className={`flex rounded rounded-medium bg-mainContainer mb-2 w-full`}>
                {mainMetaDataArticleComponent}

            </div>
            <div className={`flex flex-col items-center p-2 gap-4 mb-4`}>
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
            <div className={`flex items-center justify-between p-2`}>
                {favoritesComponent}
            </div>

            <div className={`flex items-center justify-end  p-2`}>
                {userPrivilege &&
                    editArticleButtonsComponent
                }
            </div>
            <span className={`text-sm ${font.text.size.medium} ${font.title.weigth.thin} ${font.title.curve.italic} opacity-50 p-2`}>Published  on: {formattedDate}</span>
        </div>;
    // 
    return (
        <article key={article.id} className={`bg-subContainer p-4 rounded-large max-content-main-container  flex flex-col gap-2`}>
            {typeArticle === ARTICLE_TYPE.PREVIEW && previewArticleComponent}
            {typeArticle === ARTICLE_TYPE.MEDIUM && mediumArticleComponent}
            {typeArticle === ARTICLE_TYPE.FULL && fullArticleComponent}
        </article>

    )
}
