'use client'
import { useRouter } from "next/navigation";
import { routes } from "@/app/helpers/helpersFunctions";
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";

interface UpdateArticleButtonRedirectProps {
    articleId: string
}

export default function UpdateArticleButtonRedirect({articleId}: UpdateArticleButtonRedirectProps) {
    const router = useRouter();
    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    const updateArticleRedirectHandler = () => {
        router.push(routesAdaptive.articles.update(articleId));
    }
  return(
            <button className={`bg-buttonContainer rounded-large p-2 cursor-pointer`}
                onClick={updateArticleRedirectHandler}>
                Update
            </button>
  )
}
