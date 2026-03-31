'use client'
import { font } from "@/app/globalConsts/globalStyles"
import Favorites from "../shared/favorites"
import { useEffect, useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum"
import { canEditContent } from "@/app/serverActions/permissions"
import EditActiveIcon from "@/public/icons/EditActive.svg"
import EditInactiveIcon from "@/public/icons/EditInactive.svg"
import { updateArticleAction } from "@/app/serverActions/updateArticle"
import { CROP_CONTAINER_SIZE } from "@/app/globalConsts/globalConsts"
import { cropContent, routes } from "@/app/helpers/helpersFunctions"
import AuthorIcon from "@/public/icons/user/User.svg"
import { ArticleType } from "./articlesClient"
import { useAuth } from "@/app/authClientWrapper"
import { checkIfUserLiked } from "@/app/serverActions/likesStorage"
import Link from "next/link"
import { LocaleType } from "@/app/types/types"
import { useLocale } from "@/app/hooks/useLocale"
import { BUTTON_READ_FULL_ARTICLE } from "@/translate/mediaPage/mediaPageContent"



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
    const currentAuthUser = useAuth()
    const [pending, startTransition] = useTransition()
    //
    const date = new Date(article.createdAt);
    const locale = useLocale() as LocaleType;
    const routesAdaptive = routes(locale)

    const formattedDate = date.toLocaleDateString('sv-SE');
    const router = useRouter();


    useEffect(() => {
        const checkPrivilege = async () => {
            const privilege = await canEditContent(currentAuthUser);
            setUserPrivilege(privilege);
        };
        checkPrivilege();
    }, [currentAuthUser]);

    useEffect(() => {
        const checkLiked = async () => {
            if (currentAuthUser && currentAuthUser.id) {
                const isLiked = await checkIfUserLiked(article.id, currentAuthUser.id)
                setIsLiked(isLiked)
            }
        }
        checkLiked()
    }, [currentAuthUser, article.id])

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
    const favoritesComponent = <div className={`flex items-center w-fit p-2 shadow-lg rounded-large bg-primary-color/30 border border-primary-color/30`}>
        <Favorites 
            isFavorite={isLiked}
            counterFavorites={likesCount}
            callBackIsFavorite={handleLike}
        />
        
    </div>
    const tagsComponent = () => {
        return (
            <div className={`flex flex-wrap gap-2 p-2 bg-primary-color/30 border border-primary-color/30 shadow-md ${font} rounded-large`}>
                <span>Hash Tags:</span>
            </div>
        )
    }
    const mainMetaDataArticleComponent =
        <div className={`flex items-top gap-2 p-2`}>
            <div
                className={`
                            flex  flex-col items-center gap-2 p-2
                            bg-primary-color/30
                            border border-primary-color/30
                            shadow-md
                            rounded-large
                            `}
            >
                <div className={`flex justify-center items-center rounded-circle bg-primary-color/30  p-2`}>
                    <AuthorIcon className="w-30 h-30 fill-current" />
                </div>
            </div>
            <div>
                {isEditArticle && isEditTtitle ? <input name="title" type="text" value={editTitle} onChange={editTitleHandler} className="text-3xl font-bold" /> : <h2 className={`flex h-fit text-2xl  rounded-large font-jura font-bold text-shadow-lg`}>{article.title}</h2>}
                {isEditTtitle && isChanged ? <EditActiveIcon className={`inline-block w-6 h-6 mb-4 cursor-pointer`} onClick={() => { setIsEditTitle(false) }} /> : isEditArticle && <EditInactiveIcon onClick={() => { setIsEditTitle(true) }} className={`inline-block w-6 h-6 mb-4 cursor-pointer`} />}
                {isEditAuthor ? <input name="author" type="text" value={editAuthor} onChange={editAuthorHandler} className="text-xl " /> : <h3 className={`font-jura italic opacity-70 flex items-center gap-2`}>
                    by {!article.author || article.author.length === 0 ? "Unknown Author" : article.author}
                </h3>}
                <span className={`text-sm font-jura italic opacity-70`}>Created on: {formattedDate}</span>
            </div>

        </div>

    const redirectButtonComponent = <div className={`flex  justify-end mt-auto`}>
        <Link
            className={`bg-buttonContainer p-4 rounded-large flex justify-center items-center cursor-pointer hover:scale-105`}
            href={routesAdaptive.articles.byId(article.id)}
        >
            <span className={`font-jura font-bold text-shadow-lg`}>{BUTTON_READ_FULL_ARTICLE[locale]}</span>
        </Link>
    </div>
    const interactionBlockComponent =
        <div className={`flex items-center justify-between mt-4`}>
            <div className={`flex justify-between flex-col gap-2  `}>
                {favoritesComponent}
                <span className={`text-sm font-jura italic opacity-50`}>Published on: {formattedDate}</span>

            </div>

            {redirectButtonComponent}
        </div>
    const editArticleComponent =
        <button className={`bg-buttonContainer rounded-large p-4 cursor-pointer`}
            onClick={editArticleHandler}>
            Edit
        </button>;
    const saveArticleComponent =
        <button className={`bg-buttonContainer rounded-large p-2 cursor-pointer`}
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
        <button className={`bg-buttonContainer rounded-large p-2 cursor-pointer ${!isChanged ? `bg-inactiveElement` : ''}`}
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
        <div className="flex flex-col mb-4 p-2 h-full">

            <div className="flex w-full rounded-large bg-primary-color/30 border border-primary-color/30 shadow-md p-4">
                {mainMetaDataArticleComponent}
            </div>

            <div className="flex flex-col  flex-1 p-2 rounded-large bg-primary-color/30 border border-primary-color/30 shadow-md mt-4">
                <p>
                    {cropContent(article.content, CROP_CONTAINER_SIZE.MEDIUM)}
                </p>

                <div className="mt-auto">
                    {interactionBlockComponent}
                </div>
            </div>

        </div>

    const previewArticleComponent =
        <div
            key={article.id}
            className={`
       grid grid-cols-[1fr_1fr]  p-2
        bg-primary-color/30
        border border-primary-color/30
        shadow-md
        rounded-large
     `}
        >
            {mainMetaDataArticleComponent}
            <div className="flex flex-col p-4 rounded-large bg-primary-color/30 border border-primary-color/30 shadow-md h-full">
                <p className={``}>
                    {cropContent(article.content, CROP_CONTAINER_SIZE.SMALL)}

                </p>
                {interactionBlockComponent}
            </div>

        </div>
    const fullArticleComponent =
        <div className={`flex flex-col w-full  mb-4 p-2`}>
            <div className={`flex rounded  max-w-6xl rounded-large  mb-2 w-full`}>
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
            <div className={`flex w-full justify-start p-2 mt-auto`}>
                {tagsComponent()}
            </div>
            <div className={`flex items-center justify-end  p-2`}>
                {userPrivilege &&
                    editArticleButtonsComponent
                }
            </div>
            <span className={`text-sm p-2  opacity-50 `}>Published  on: {formattedDate}</span>
        </div>;
    // 
    return (
        <article key={article.id} className={`rounded-large  w-full  flex flex-col gap-2`}>
            {typeArticle === ARTICLE_TYPE.PREVIEW && previewArticleComponent}
            {typeArticle === ARTICLE_TYPE.MEDIUM && mediumArticleComponent}
            {typeArticle === ARTICLE_TYPE.FULL && fullArticleComponent}
        </article>

    )
}
