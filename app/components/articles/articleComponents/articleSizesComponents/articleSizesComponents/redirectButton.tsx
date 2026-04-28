import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum"
import { routes } from "@/app/helpers/helpersFunctions"
import { useLocale } from "@/app/hooks/useLocale"
import { LocaleType } from "@/app/types/types"
import { BUTTON_READ_FULL_ARTICLE } from "@/translate/mediaPage/mediaPageContent"
import Link from "next/link"


interface RedirectButtonProps {
    articleId: string,
    sizeElement?: SIZE_ELEMENT
}

export default function RedirectButton({ articleId, sizeElement }: RedirectButtonProps) {
    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    return (
        <div className={`flex p-2 shadow-sm rounded-large bg-primary-color/50 border border-primary-color/30`}>
            <Link
                className={`flex justify-center items-center cursor-pointer`}
                href={routesAdaptive.articles.byId(articleId)}
            >
                <span className={`${sizeElement === SIZE_ELEMENT.FULL ? 'text-md' : 'text-xs '}  whitespace-nowrap`}>{BUTTON_READ_FULL_ARTICLE[locale]}</span>
            </Link>
        </div>
  )
}
