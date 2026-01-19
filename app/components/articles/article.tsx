'use client'
import { rounded, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles"
import Favorites from "../shared/favorites"
import { useGlobalStore } from "@/app/store/globalStore"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { APP_PATH_ROUTER } from "@/app/globalConsts/globalEnum"

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
    const date = new Date(createdAt);

    const formattedDate = date.toLocaleDateString('sv-SE');

    const router = useRouter();

    return (
        <div key={id} className={`${THEME_COLOR_SCHEME[currentTheme].subContainer} p-4 m-4 rounded-md w-full max-w-2xl flex flex-col gap-2`}>
            <div>
                <h1 className="text-2xl font-bold mb-2">{title}</h1><h2>{title}</h2>
            </div>
            <div>
                <h2>{author}</h2>
            </div>
            <div>
                <p>{content}</p>
            </div>

            <span>{formattedDate}</span>
            <div>
                <button
                    className={`${THEME_COLOR_SCHEME[currentTheme].buttonContainer} ${rounded.medium} p-2 cursor-pointer`}
                    onClick={() => router.push(`${APP_PATH_ROUTER.ARTICLES}/${id}`)}
                >
                    read more
                </button>
            </div>
            <Favorites isFavorite={isFavorite} callBackIsFavorite={() => setIsFavorite(!isFavorite)} />
        </div>
    )
}
