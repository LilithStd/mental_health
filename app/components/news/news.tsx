'use client'

import Favorites from "./favorites"

type NewsTypes = {
    id: string
    title: string
    content: string
    date: string
}

interface NewsProps {
    news: NewsTypes
}
export default function News({ news }: NewsProps) {
    // states

    // 
    // handlers
    //
    // components
    //  
    return (
        <div>
            <h2>{news.title}</h2>
            <p>{news.content}</p>
            <span>{news.date}</span>
            <Favorites isFavorite={false} />
        </div>
    )
}
