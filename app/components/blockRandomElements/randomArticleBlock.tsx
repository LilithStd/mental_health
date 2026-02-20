'use client'

import { font } from "@/app/globalConsts/globalStyles";
import { pickRandomUnique } from "@/app/helpers/helpersFunctions";
import { useGlobalStore } from "@/app/store/globalStore";
import { useState, useEffect } from "react";
import Article from "../articles/article";
import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum";
import Loading from "../shared/loading";
import ArticleServerLikesWrapper from "../articles/articleServerLikesWrapper";
import { ArticleType } from "../articles/articlesClient";

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
    <div className={`flex flex-col bg-subContainer indents-main-container rounded-large  `}>
      <h2 className={`text-3xl font-bold bg-mainContainer rounded-large indents-main-container`}>Random Article</h2>
      <div>
        {loading ? (
          <Loading />
        ) : (
          articles.map(article => (

            <Article key={article.id} article={article} typeArticle={ARTICLE_TYPE.PREVIEW} initialLikesCount={0} />

          ))
        )}
      </div>
    </div>

  )
}
