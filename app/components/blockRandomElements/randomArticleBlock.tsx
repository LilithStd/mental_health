'use client'

import { ArticleType } from "@/app/articles/page";
import { rounded, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles";
import { pickRandomUnique } from "@/app/helpers/helpersFunctions";
import { useGlobalStore } from "@/app/store/globalStore";
import { useState, useEffect } from "react";

export default function RandomArticleBlock() {
  //stores
  const currentTheme = useGlobalStore((state) => state.currentTheme);
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
    <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].subContainer} p-4 m-4 ${rounded.medium} w-full max-w-6xl items-center text-center`}>
      <h2>randomArticle</h2>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          articles.map(article => (
            <div key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.content}</p>
            </div>
          ))
        )}
      </div>
    </div>

  )
}
