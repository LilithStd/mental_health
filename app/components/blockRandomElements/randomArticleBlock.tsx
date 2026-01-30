'use client'

import { ArticleType } from "@/app/articles/page";
import { font, rounded, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles";
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
    <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].subContainer} p-4 m-4 ${rounded.medium} w-full max-w-6xl`}>
      <h2 className={`${font.title.size.medium} ${font.title.weigth.bold} ${THEME_COLOR_SCHEME[currentTheme].elementAccent} ${rounded.high} p-2 mb-4`}>Random Article</h2>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          articles.map(article => (
            <Article key={article.id} article={article} typeArticle={ARTICLE_TYPE.PREVIEW} />
            //           <div
            //             key={article.id}
            //             className={`
            //   grid grid-cols-[auto_1fr] gap-4 mb-4 p-2
            //   ${THEME_COLOR_SCHEME[currentTheme].container}
            //   ${rounded.high}
            // `}
            //           >
            //             <div
            //               className={`
            //     flex m-2 flex-col items-center gap-2
            //     ${THEME_COLOR_SCHEME[currentTheme].elementAccent}
            //     p-2 rounded ${rounded.high}
            //   `}
            //             >
            //               <AuthorIcon className="w-30 h-30 fill-current" />
            //               <h3 className={`${font.title.size.small} ${font.title.weigth.thin} ${font.title.curve.italic}`}>
            //                 by {!article.author || article.author.length === 0 ? "Unknown Author" : article.author}
            //               </h3>
            //             </div>

            //             <div className="flex flex-col gap-2 p-2">
            //               <h3 className={`${font.title.size.small} ${font.title.weigth.medium} p-2`}>
            //                 {article.title}
            //               </h3>
            //               <p className={`${font.text.size.medium} ${THEME_COLOR_SCHEME[currentTheme].text}`}>
            //                 {cropContent(article.content, CROP_CONTAINER_SIZE.SMALL)}

            //               </p>
            //               <div>
            //                 <p>{formattedDate(article.createdAt)}</p>
            //               </div>
            //             </div>

            //           </div>

          ))
        )}
      </div>
    </div>

  )
}
