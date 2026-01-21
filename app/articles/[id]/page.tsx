export default async function ArticlePage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params // ✅ ОБЯЗАТЕЛЬНО

    const res = await fetch(
        `http://localhost:3000/api/articles?id=${id}`,
        { cache: 'no-store' }
    )

    if (!res.ok) {
        return <div>Статья не найдена</div>
    }

    const { article } = await res.json()

    return (
        <article className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold">{article.title}</h1>

            <h2 className="text-lg italic mb-4">By {article.author}</h2>

            <p>{article.content}</p>
        </article>
    )
}
