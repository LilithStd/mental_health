import UpdateArticle from "@/app/components/articles/articleComponents/updateArticle"
import { routes } from "@/app/helpers/helpersFunctions"
import { getLocale } from "@/app/hooks/server/getLocale"
import { useLocale } from "@/app/hooks/useLocale"
import { getArticleById } from "@/app/service/articleService"
import { ArticleType, LocaleType } from "@/app/types/types"
import { Params } from "next/dist/server/request/params"


interface UpdateArticleComponent {
    updatedArticle: ArticleType
}

export default async function UpdateArticlePage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
  const { id } = await params
  const locale = await getLocale() as LocaleType
  const routesAdaptive = routes(locale)
  const currentArticleById = await getArticleById(id)
  console.log(currentArticleById)
  if (!currentArticleById) return null
  return (
    <div className={`flex flex-col indents-main-container rounded-medium flex-1 items-center`}>
        <div className={`flex flex-col gap-4 p-4 max-content-main-container rounded-large bg-primary-color/30 border border-primary-color/30 w-full`}>
        <h1>Update Article Page</h1>
        <UpdateArticle updatedArticle={currentArticleById} />
    </div>
    </div>
 
  )
}
