'use client'
import { useLocale } from "@/app/hooks/useLocale"
import { LocaleType, MultiLanguageText } from "@/app/types/types"

interface PathLinksProps {
    links: { name: MultiLanguageText, href: string }[]
}

export default function PathLinks({ links }: PathLinksProps) {
    const locale = useLocale() as LocaleType
    return (
        <div>
            <div className={`flex gap-2 items-center`}>
                {links.map((link, index) => (
                    <div key={index} className={`flex gap-2 items-center`}>
                        <a href={link.href}>{link.name[locale]}</a>
                    </div>
                ))}
            </div>
        </div>
    )
}
