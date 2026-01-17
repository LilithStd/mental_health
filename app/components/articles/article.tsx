import Favorites from "../shared/favorites"

interface ArticleProps {
    id: string
    title: string
    content: string
    date: string
}
export default function Article({ id, title, content, date }: ArticleProps) {
    return (
        <div key={id}>
            <h2>{title}</h2>
            <p>{content}</p>
            <span>{date}</span>
            <Favorites isFavorite={false} />
        </div>
    )
}
