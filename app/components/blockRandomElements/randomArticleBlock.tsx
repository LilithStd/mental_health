'use client'

import { ArticleType } from "@/app/articles/page";
import { font, rounded, sizes, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles";
import { cropContent, pickRandomUnique } from "@/app/helpers/helpersFunctions";
import { useGlobalStore } from "@/app/store/globalStore";
import { useState, useEffect } from "react";
import AuthorIcon from "@/public/icons/user/User.svg"
import { CROP_CONTAINER_SIZE } from "@/app/globalConsts/globalConsts";
import Article from "../articles/article";
import { ARTICLE_TYPE } from "@/app/globalConsts/globalEnum";

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

  const date = (currentDate: string) => new Date(currentDate);

  const formattedDate = (currentDate: string) => date(currentDate).toLocaleDateString('sv-SE');

  return (
    <div className={`flex flex-col bg-subContainer m-4 p-4  ${rounded.medium} ${sizes.width.maxWidth}`}>
      <h2 className={`${font.title.size.medium} ${font.title.weigth.bold} ${THEME_COLOR_SCHEME[currentTheme].elementAccent} ${rounded.high} p-2 mb-4`}>Random Article</h2>
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
