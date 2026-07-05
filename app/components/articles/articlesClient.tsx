'use client'

import NewArticleButton from "./articleComponents/newArticleButton";
import { routes } from "@/app/helpers/helpersFunctions";
import ReturnButton from "../returnButton";
import {  ArticleType, LocaleType } from "@/app/types/types";
import { MediaPageContent } from "@/translate/mediaPage/mediaPageContent";
import { SEARCH_REQUEST_TYPE, SIZE_ELEMENT } from "@/app/globalConsts/globalEnum";
import { useLocale } from "@/app/hooks/useLocale";
import Article from "./article";
import Search from "../shared/search";
import { useState } from "react";


interface ArticlesClientProps {
    initialArticles: ArticleType[],
    typeArticle: SIZE_ELEMENT,
}

export default  function ArticlesClient({ initialArticles, typeArticle }: ArticlesClientProps) {

    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    const articles = initialArticles
    const [searchResults, setSearchResults] = useState<ArticleType[]>(initialArticles);
    console.log('Result', searchResults);


    const randomArticlesComponent = <div className={`flex flex-col indents-main-container rounded-large  `}>
        <h2 className={`text-3xl  bg-primary-color/30 rounded-large  p-4 mb-4`}>{MediaPageContent[locale].randomArticles}</h2>
        <div className={`flex flex-col gap-4`}>
            {articles.map((article) =>
                <Article key={article.id} article={article} typeArticle={typeArticle} />
            )}
        </div>
    </div>

    const regularArticlesComponent =
            <div className={`flex flex-col flex-1 rounded-large p-4`}>
              
                <div className={`flex flex-col justify-center items-center`}>
                    <NewArticleButton />
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-4  max-content-main-container`}>
                    {articles.map((article) =>
                        <Article key={article.id} article={article} typeArticle={typeArticle} />
                    )}
                </div>
            </div>
    return (
        <div className={`flex flex-col indents-main-container rounded-medium flex-1 items-center`}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 border border-primary-color/30 p-4 shadow-md`}>
              <div className={`flex w-full justify-start mb-4`}>
                    <ReturnButton pathToReturn={routesAdaptive.media.root} />
                </div>
                <div className={`flex flex-col items-center justify-center mb-4`}>
                    <Search requestType={SEARCH_REQUEST_TYPE.TITLE} query={""} callBackResultAfterSearch={function (results: ArticleType[]): void {
                        setSearchResults(results);
                    } } arrayForSearch={articles}/>
                </div>

                    
                
                {articles.length === 0 ? (
                    <p>{MediaPageContent[locale].noArticles}</p>
                ) : (
                    typeArticle === SIZE_ELEMENT.SMALL ? randomArticlesComponent : regularArticlesComponent
                )}
            </div>
        </div>

    )
}
