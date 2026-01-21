'use client'
import { useEffect, useState, use } from 'react'
import { Article } from '../page'

export default function ArticlePage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = use(params)
    const [article, setArticle] = useState<Article | null>(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        fetch(`/api/articles?id=${id}`)
            .then(r => {
                if (!r.ok) {
                    setError(true)
                    return null
                }
                return r.json()
            })
            .then(data => {
                if (data) {
                    setArticle(data.article)
                }
            })
    }, [id])

    if (error) {
        return <div>Статья не найдена</div>
    }

    if (!article) {
        return <div>Загрузка...</div>
    }

    return (
        <article className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold">{article.title}</h1>

            <h2 className="text-lg italic mb-4">By {article.author}</h2>

            <p>{article.content}</p>
        </article>
    )
}
