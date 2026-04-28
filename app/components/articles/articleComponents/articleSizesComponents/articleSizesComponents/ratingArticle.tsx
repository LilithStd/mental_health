import Favorites from '@/app/components/shared/favorites'
import HashTags from '@/app/components/shared/hashTags'
import { SIZE_ELEMENT } from '@/app/globalConsts/globalEnum'
import React from 'react'

interface RatingArticleProps {
    rating: number
}

export default function RatingArticle({ rating }: RatingArticleProps) {
  return (
                <div className={`flex items-center justify-between w-full gap-2 shadow-sm rounded-large bg-primary-color/30 border border-primary-color/30`}>
                    <Favorites isFavorite={false} type={SIZE_ELEMENT.PREVIEW} />
                    {/* {tagsComponent(type)} */}
                    <HashTags hashTags={['example', 'sample', 'test']} type={SIZE_ELEMENT.PREVIEW} />
                    {redirectButtonComponent(type)}
                </div>
        )
}
