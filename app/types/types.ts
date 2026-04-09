import { ROLE_AUTH_USER_PRIVILEGE } from "../globalConsts/globalEnum"

export type UserAuthType = {
    id: number,
    email: string,
    role: string
    privilege: ROLE_AUTH_USER_PRIVILEGE
}

export const LOCALES = ['en', 'lv', 'ru'] as const
export type LocaleType = (typeof LOCALES)[number]
export type ArticleType = {
    id: number
    multiLanguage:boolean 
    title: {
        en: string
        ru: string
        lv: string
    }
    description: {
        en: string
        ru: string
        lv: string
    }
    content: {
        en: string
        ru: string
        lv: string
    }
    date: string
}