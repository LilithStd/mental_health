import Favorites from "../shared/favorites"

interface ArticleProps {
    id: number
    title: string
    content: string
    createdAt: string
}


export default function Article({ id, title, content, createdAt }: ArticleProps) {
    return (
        <div key={id}>
            <h2>{title}</h2>
            <p>{content}</p>
            <span>{createdAt}</span>
            <Favorites isFavorite={false} />
        </div>
    )
}
