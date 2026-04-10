'use client'
import ArticlesClient from "@/app/components/articles/articlesClient"
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum"
// import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum"
import { getAllArticles } from "@/app/serverActions/articleStorage"
import { useArticleStore } from "@/app/store/articleStore"



export default function ArticlesPage() {
    // const articles = await getAllArticles()
    const getAllArticles = useArticleStore((state) => state.getAllArticles)
    // const articles = await getAllArticles()
    console.log("getAllArticles:", getAllArticles().then(res => console.log("articles:", res)))
    return (
        <div>
            {}
        </div>
    )

    // return <ArticlesClient initialArticles={articles} type={SIZE_ELEMENT.MEDIUM} />

}