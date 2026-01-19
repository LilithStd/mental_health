'use client'
import { THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles"
import Favorites from "../shared/favorites"
import { useGlobalStore } from "@/app/store/globalStore"
import { useState } from "react"

interface ArticleProps {
    id: number
    title: string
    author: string
    content: string
    createdAt: string
}


export default function Article({ id, title, author, content, createdAt }: ArticleProps) {
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    //state
    const [isFavorite, setIsFavorite] = useState(false);
    //
    return (
        <div key={id} className={`${THEME_COLOR_SCHEME[currentTheme].subContainer} p-4 m-4 rounded-md w-full max-w-2xl flex flex-col gap-2`}>
            <h2>{title}</h2>
            <h2>{author}</h2>
            <p>{content}</p>
            <span>{createdAt}</span>
            <Favorites isFavorite={isFavorite} callBackIsFavorite={() => setIsFavorite(!isFavorite)} />
        </div>
    )
}
