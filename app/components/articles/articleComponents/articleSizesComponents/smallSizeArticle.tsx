import { CROP_CONTAINER_SIZE } from '@/app/globalConsts/globalConsts';
import { SIZE_ELEMENT } from '@/app/globalConsts/globalEnum';
import { cropContent } from '@/app/helpers/helpersFunctions';
import { useLocale } from '@/app/hooks/useLocale';
import { ArticleType, LocaleType } from '@/app/types/types'
import InteractionBlockArticle from './articleSizesComponents/interactionBlockArticle';
import MetaDataArticle from './articleSizesComponents/metaDataArticle';


interface SmallSizeArticleProps {
    article: ArticleType
}

export default function SmallSizeArticle({ article }: SmallSizeArticleProps) {
   const locale = useLocale() as LocaleType;
      return    (
          <div className="flex  flex-col p-2 h-full bg-primary-color/30 border border-primary-color/30 shadow-md rounded-large">
      
                  <div className={`flex w-full rounded-large`}>
                      <MetaDataArticle article={article} />
                  </div>
      
                  <div className="flex flex-col  flex-1 p-2 rounded-large">
                      <p className={`text-sm  whitespace-pre-wrap leading-relaxed`}>
                          {cropContent(article.content[locale], CROP_CONTAINER_SIZE.SMALL)}
                      </p>
      
                      <div className={`w-full mt-auto flex`}>
                          <InteractionBlockArticle article={article} typeArticle={SIZE_ELEMENT.SMALL}/>
                      </div>
                  </div>
      
              </div>
    )
}
