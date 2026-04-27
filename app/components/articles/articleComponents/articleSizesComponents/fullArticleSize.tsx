import Favorites from "@/app/components/shared/favorites"
import HashTags from "@/app/components/shared/hashTags"
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum"
import { ArticleType } from "@/app/types/types"
import { locale } from "dayjs"
import Image from "next/image"

interface FullArticleSizeProps {
    article:ArticleType
}

export default function FullArticleSize({article}: FullArticleSizeProps) {
  return (
     <div className={` w-full  mb-4 `}>
                <div className={` border rounded max-w-6xl rounded-large mb-2 p-4 bg-primary-color/30 border-primary-color/30`}>
                        <Image 
                            src={article.image ? article.image : ''} 
                            alt="Article Image"
                            width={400}
                            height={300}  
                            className={` rounded-large float-left mr-4 mb-2`} 
                        />
                        <div className={`pb-4`}>
                            {mainMetaDataArticleComponent}
                        </div>
                        
                        <p className={``}>
                            {article.content[locale]}
                        </p>
                </div>
                <div className={`flex gap-2`}>
                    <button className={`bg-buttonContainer rounded-large p-2 cursor-pointer`}
                        onClick={updateArticleRedirectHandler}>
                        Update
                    </button>
                </div>
                <div className={`flex w-full justify-start gap-4 items-center p-2`}>
                    {/* {interactionBlockComponent} */}
                    <Favorites
                        isFavorite={isLiked}
                        type={SIZE_ELEMENT.FULL}
                        counterFavorites={likesCount}
                        // callBackIsFavorite={handleLike}
                    />
                    <HashTags hashTags={['example', 'sample', 'test']} type={SIZE_ELEMENT.FULL}/>
                </div>
                <span className={`text-sm p-2  opacity-50 `}>Published  on: {formattedDate}</span>
            </div>
  )
}
