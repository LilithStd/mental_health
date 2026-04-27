import { ArticleType, LocaleType } from "@/app/types/types"
import MetaDataArticle from "./articleSizesComponents/metaDataArticle"
import { cropContent } from "@/app/helpers/helpersFunctions"
import { CROP_CONTAINER_SIZE } from "@/app/globalConsts/globalConsts"
import { useLocale } from "@/app/hooks/useLocale"

interface MediumSizeArticleProps {
    article: ArticleType // Define any props that MediumSizeArticle might need
}

export default function MediumSizeArticle({ article }: MediumSizeArticleProps) {
    const locale = useLocale() as LocaleType;
    return    (
        <div className="flex  flex-col p-2 h-full bg-primary-color/30 border border-primary-color/30 shadow-md rounded-large">
    
                <div className={`flex w-full rounded-large`}>
                    <MetaDataArticle article={article} />
                </div>
    
                <div className="flex flex-col  flex-1 p-2 rounded-large">
                    <p className={`text-sm  whitespace-pre-wrap leading-relaxed`}>
                        {cropContent(article.content[locale], CROP_CONTAINER_SIZE.MEDIUM)}
                    </p>
    
                    <div className={`w-full mt-auto flex`}>
                        {interactionBlockComponent}
                    </div>
                </div>
    
            </div>
  )
}
