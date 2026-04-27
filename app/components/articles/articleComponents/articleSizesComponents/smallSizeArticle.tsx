import { ArticleType } from '@/app/types/types'


interface SmallSizeArticleProps {
    article: ArticleType // Define any props that SmallSizeArticle might need
}

export default function SmallSizeArticle({ article }: SmallSizeArticleProps) {
  return (
    <div>SmallSizeArticle</div>
  )
}
