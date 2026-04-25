'use client'
import { useLocale } from "@/app/hooks/useLocale"
import { ArticleType, LocaleType } from "@/app/types/types"
import { PlaceHolderLanguageContent } from "@/translate/mediaPage/articleContent/articleContent"


interface UpdateArticleComponent {
    updatedArticle: ArticleType
}

export default function UpdateArticle({updatedArticle}: UpdateArticleComponent) {
  const locale = useLocale() as LocaleType
  console.log(updatedArticle)
  return (
    <div className={`flex flex-col gap-4 p-4 max-content-main-container rounded-large bg-primary-color/30 border border-primary-color/30 w-full`}>
      <div>
        <p>updateArticle: {updatedArticle.id}</p>
      </div> 
      <div className={`flex  gap-2`}>
        <p>{PlaceHolderLanguageContent[locale].title}:</p>
        <p>{updatedArticle.title[locale]}</p>
      </div>
      <div className={`flex  gap-2`}>
        <p>{PlaceHolderLanguageContent[locale].author}:</p>
        <p>{updatedArticle.author ? updatedArticle.author[locale] : ''}</p>
      </div>
      <div className={`flex  gap-2`}>
        <p>{PlaceHolderLanguageContent[locale].content}:</p>
        <p>{updatedArticle.content[locale]}</p>
      </div>
       <div>
        <p>{PlaceHolderLanguageContent[locale].hashTags}:</p>
        <p>{updatedArticle.hashTags ? updatedArticle.hashTags.join(', ') : ''}</p>
      </div>
      <div>
        <p>{}: {updatedArticle.createdAt}</p>
      </div>
     
    </div>
  )
}
