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
    title: MultiLanguageText
    description?: MultiLanguageText
    content: MultiLanguageText
    tags: string[]
    likes: number
    image?: string
    author?: string
    createdAt: string
    updatedAt?: string
}

export type TestType = {
     id:string,
    label: string,
    title: {
        en: string,
        ru: string,
        lv: string
    },
    content: {
        en: string,
        ru: string,
        lv: string
    },
    questions: {
        title: {
            en: string,
            ru: string,
            lv: string
        },
        variants: {
            id: string,
            title: {
                en: string,
                ru: string,
                lv: string
            },
            count: number
        }[]
    }[],
    createdAt: Date,
    updatedAt: Date

}