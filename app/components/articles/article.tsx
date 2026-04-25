'use client'

import Favorites from "../shared/favorites"
import { useEffect, useState, useTransition } from "react"
import { useRouter } from "next/navigation"
// import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum"
import { canEditContent } from "@/app/serverActions/permissions"
import EditActiveIcon from "@/public/icons/EditActive.svg"
import EditInactiveIcon from "@/public/icons/EditInactive.svg"
import { updateArticleAction } from "@/app/serverActions/updateArticle"
import { CROP_CONTAINER_SIZE } from "@/app/globalConsts/globalConsts"
import { cropContent, routes } from "@/app/helpers/helpersFunctions"
import AuthorIcon from "@/public/icons/user/User.svg"
import { useAuth } from "@/app/authClientWrapper"
import { checkIfUserLiked } from "@/app/serverActions/likesStorage"
import Link from "next/link"
import { ArticleType, LocaleType } from "@/app/types/types"
import { useLocale } from "@/app/hooks/useLocale"
import { BUTTON_READ_FULL_ARTICLE } from "@/translate/mediaPage/mediaPageContent"
import HashTags from "../shared/hashTags"
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum"
import { useArticleStore } from "@/app/store/articleStore"
import Image from "next/image"




interface ArticleProps {
    article: ArticleType
    // initialLikesCount: number
    typeArticle: SIZE_ELEMENT
}


export default function Article({ article, typeArticle }: ArticleProps) {
    const createArticle = useArticleStore((state) => state.createArticle)
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
    const currentAuthUser = useAuth()
    const [pending, startTransition] = useTransition()
    //
    const date = new Date(article.createdAt);
    const locale = useLocale() as LocaleType;
    const routesAdaptive = routes(locale)

    const formattedDate = date.toLocaleDateString('sv-SE');
    const router = useRouter();
    // console.log('article', article)

    useEffect(() => {
        const checkPrivilege = async () => {
            const privilege = await canEditContent(currentAuthUser);
            setUserPrivilege(privilege);
        };
        checkPrivilege();
    }, [currentAuthUser]);

    const editArticleHandler = () => {
        setIsEditArticle(true);
    }
    const editTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTitle({ ...editTitle, [locale]: e.target.value });
        setIsChanged(true);
    }
    const editAuthorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (editAuthor) {
            setEditAuthor({ ...editAuthor, [locale]: e.target.value });
        }
        setIsChanged(true);
    }
    const editContentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEditContent({ ...editContent, [locale]: e.target.value });
        setIsChanged(true);
    }
    const updateArticleRedirectHandler = () => {
        router.push(routesAdaptive.articles.update(article.id));
    }
    // components

    const raitingItemComponent = (type: SIZE_ELEMENT) => {
        const favoritesComponent = (type: SIZE_ELEMENT) => {
            return ( <div className={`flex items-center  p-2 shadow-sm rounded-large bg-primary-color/30 border border-primary-color/30`}>
        <Favorites 
            isFavorite={isLiked}
            type={type}
            counterFavorites={likesCount}
            // callBackIsFavorite={handleLike}
        />
        </div>) 
        }
        const tagsComponent = (type: SIZE_ELEMENT) => {
        return (
            <div className={`flex  bg-primary-color/30 border border-primary-color/30  shadow-sm rounded-large p-2 gap-2 text-xs `}>
                <HashTags hashTags={['example', 'sample', 'test']} type={type}/>
            </div>
        )
    }
        return (
                <div className={`flex items-center justify-between w-full gap-2 shadow-sm rounded-large bg-primary-color/30 border border-primary-color/30`}>
                    {favoritesComponent(type)}
                    {tagsComponent(type)}
                    {redirectButtonComponent(type)}
                </div>
        )
    }
    const mainMetaDataArticleComponent =
        <div className={`flex items-top gap-2`}>
            <div
                className={`
                            flex  flex-col items-center gap-2 p-2
                            bg-primary-color/30
                            border border-primary-color/30
                            shadow-md
                            rounded-large
                            `}
            >
                <div className={`flex justify-center items-center rounded-circle bg-primary-color/30`}>
                    <AuthorIcon className="w-30 h-30 fill-current" />
                </div>
            </div>
            <div>
                {isEditArticle && isEditTtitle ? <input name="title" type="text" value={editTitle[locale]} onChange={editTitleHandler} className="text-3xl" /> : <h2 className={`flex h-fit text-2xl  rounded-large font-bold`}>{article.title[locale]}</h2>}
                {isEditTtitle && isChanged ? <EditActiveIcon className={`inline-block w-6 h-6 mb-4 cursor-pointer`} onClick={() => { setIsEditTitle(false) }} /> : isEditArticle && <EditInactiveIcon onClick={() => { setIsEditTitle(true) }} className={`inline-block w-6 h-6 mb-4 cursor-pointer`} />}
                {isEditAuthor ? <input name="author" type="text" value={article.author ? article.author[locale] : ''} onChange={editAuthorHandler} className="text-xl " /> : <h3 className={`italic opacity-70 flex items-center gap-2`}>
                    by <span>{article.author ? article.author[locale] : 'Unknown author'}</span>
                </h3>}
                <span className={`text-sm  italic opacity-70`}>Created on: {formattedDate}</span>
            </div>

        </div>

    const redirectButtonComponent = (type: SIZE_ELEMENT) => <div className={`flex p-2 shadow-sm rounded-large bg-primary-color/50 border border-primary-color/30`}>
        <Link
            className={`flex justify-center items-center cursor-pointer`}
            href={routesAdaptive.articles.byId(article.id)}
        >
            <span className={`${type === SIZE_ELEMENT.FULL ? 'text-md' : 'text-xs '}  whitespace-nowrap`}>{BUTTON_READ_FULL_ARTICLE[locale]}</span>
        </Link>
    </div>
    const interactionBlockComponent =
        <div className={`flex flex-col  w-full gap-2 items-start mt-2`}>
            <div className={`flex flex-col w-full`}>
                {raitingItemComponent(typeArticle)}                
                <span className={`text-sm pl-2 pt-2 italic opacity-40`}>Published on: {formattedDate}</span>
            </div>

            
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
                    updateArticleAction(article.id, editTitle.en, editContent.en)
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
        <div className="flex  flex-col p-2 h-full bg-primary-color/30 border border-primary-color/30 shadow-md rounded-large">

            <div className={`flex w-full rounded-large`}>
                {mainMetaDataArticleComponent}
            </div>

            <div className="flex flex-col  flex-1 p-2 rounded-large">
                <p className={`text-sm  whitespace-pre-wrap leading-relaxed`}>
                    {cropContent(article.content[locale], CROP_CONTAINER_SIZE.MEDIUM)}
                </p>

                <div className={`w-full mt-auto flex`}>
                    {interactionBlockComponent}
                </div>
            </div>

        </div>

    const previewArticleComponent =
        <div
            key={article.id}
            className={`
                grid grid-cols-[0.8fr_1fr]  p-2
                bg-primary-color/30
                border border-primary-color/30
                shadow-md
                rounded-large
     `}
        >
            {mainMetaDataArticleComponent}
            <div className="flex flex-col p-4 rounded-large">
                <p className={``}>
                    {cropContent(article.content[locale], CROP_CONTAINER_SIZE.SMALL)}
                </p>
                {interactionBlockComponent}
            </div>

        </div>
    const fullArticleComponent =
        <div className={` w-full  mb-4 p-2`}>
            <div className={`flex border rounded max-w-6xl rounded-large  mb-2 w-full`}>
                <div className={`flex gap-4 p-2   w-full`}>
                    <Image 
                        src={article.image ? article.image : ''} 
                        alt="Article Image" 
                        width={200}         
                        height={200} 
                        className={`rounded-large`} />
                      
                    <div className={`flex flex-col gap-4 mb-4`}>
                        {mainMetaDataArticleComponent}
                        <p className={``}>
                            {article.content[locale]}
                        </p>
                    </div>
                        
                </div>
            </div>
            <div className={`flex gap-2`}>
                <button className={`bg-buttonContainer rounded-large p-2 cursor-pointer`}
                    onClick={updateArticleRedirectHandler}>
                    Update
                </button>
            </div>
            <div className={`flex items-center justify-end  p-2`}>
                {userPrivilege &&
                    editArticleButtonsComponent
                }
            </div>
            <div className={`flex w-full justify-start gap-4 items-center p-2`}>
                {/* {interactionBlockComponent} */}
                <Favorites
                    isFavorite={isLiked}
                    type={SIZE_ELEMENT.FULL}
                    counterFavorites={likesCount}
                    // callBackIsFavorite={handleLike}
                />
                <HashTags hashTags={['example', 'sample', 'test']} type={SIZE_ELEMENT.FULL}/>
            </div>
            <span className={`text-sm p-2  opacity-50 `}>Published  on: {formattedDate}</span>
        </div>;
    // 
    return (
        <article key={article.id} className={`rounded-large   w-full  flex flex-col`}>
            {typeArticle === SIZE_ELEMENT.PREVIEW && previewArticleComponent}
            {typeArticle === SIZE_ELEMENT.MEDIUM && mediumArticleComponent}
            {typeArticle === SIZE_ELEMENT.FULL && fullArticleComponent}
        </article>

    )
}
