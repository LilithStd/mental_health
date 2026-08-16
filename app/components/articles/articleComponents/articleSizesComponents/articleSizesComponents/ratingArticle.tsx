import Favorites from '@/app/components/shared/favorites'
import HashTags from '@/app/components/shared/hashTags'
import { SIZE_ELEMENT } from '@/app/globalConsts/globalEnum'
import React from 'react'
import RedirectButton from './redirectButton'
import { ArticleType } from '@/app/types/types'

interface RatingArticleProps {
    article:ArticleType,
    typeArticle: SIZE_ELEMENT
}

export default function RatingArticle({ article, typeArticle }: RatingArticleProps) {
  return (
                <div className={`flex items-center justify-between w-full gap-2 shadow-sm rounded-large bg-primary-color/8 border border-primary-color/10 p-1`}>
                    {/* <Favorites isFavorite={false} type={typeArticle} /> */}
                    <div className={`flex p-2 items-center`}>
                        <HashTags hashTags={['example', 'sample', 'test']} type={typeArticle} />
                    </div>
                    
                    <RedirectButton articleId={article.id} sizeElement={typeArticle} />
                </div>
        )
}
