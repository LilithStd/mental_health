'use client'

import Favorites from "../shared/favorites"

export type NewsType = {
    id: number
    title: string
    content: string
    createdAt: string
    link: string
}

interface NewsProps {
    news: NewsType
}
export default function News({ news }: NewsProps) {
    // states

    // 
    // handlers
    //
    // components
    //  
    return (
        <div key={news.id} className="mb-4">
            <h3 className="font-bold">{news.title}</h3>
            <p>{news.content}</p>
            <a href={news.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Read more</a>
        </div>
    )
}
