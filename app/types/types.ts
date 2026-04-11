import { ROLE_AUTH_USER_PRIVILEGE } from "../globalConsts/globalEnum"

export type UserAuthType = {
    id: number,
    email: string,
    role: string
    privilege: ROLE_AUTH_USER_PRIVILEGE
}

export const LOCALES = ['en', 'lv', 'ru'] as const
export type LocaleType = (typeof LOCALES)[number]
export type MultiLanguageText = {
    en: string
    ru: string
    lv: string
}
export type ArticleType = {
    id: string
    multiLanguage:boolean 
    title: MultiLanguageText | string
    description?: MultiLanguageText | string
    content: MultiLanguageText | string
    tags: string[]
    likes: number
    author?: string
    createdAt: string
    updatedAt?: string
}