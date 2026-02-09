'use client'

import { ArticleType } from "@/app/articles/page";
import { font } from "@/app/globalConsts/globalStyles";
import { pickRandomUnique } from "@/app/helpers/helpersFunctions";
import { useGlobalStore } from "@/app/store/globalStore";
import { useState, useEffect } from "react";
import Article from "../articles/article";
import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum";

export default function RandomArticleBlock() {
  //stores
  const currentLanguage = useGlobalStore((state) => state.currentLanguage);
  // state
  const [articles, setArticles] = useState<ArticleType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/articles')
      .then(res => res.json())
      .then(data => {
        const randomAticles = pickRandomUnique(data.articles as ArticleType[], 2);
        setArticles(randomAticles)
        setLoading(false)
      })
  }, [])


  return (
    <div className={`flex flex-col bg-subContainer indents-main-container rounded-medium max-content-main-container`}>
      <h2 className={`${font.title.size.medium} ${font.title.weigth.bold} bg-accentElement rounded-large p-2 mb-4`}>Random Article</h2>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          articles.map(article => (
            <Article key={article.id} article={article} typeArticle={ARTICLE_TYPE.PREVIEW} />
          ))
        )}
      </div>
    </div>

  )
}
