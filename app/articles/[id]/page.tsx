export default function FullArticlePage({ params }: { params: { id: string } }) {

    return (
        <div>
            <div>Full Article Page</div>
            <h2>{params.id}</h2>
        </div>

    )
}
