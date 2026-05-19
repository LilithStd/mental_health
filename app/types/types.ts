import { ROLE_AUTH_USER_PRIVILEGE } from "../globalConsts/globalEnum"

export type UserAuthType = {
    id: string,
    email: string,
    role: string
    privileges: ROLE_AUTH_USER_PRIVILEGE
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
    hashTags: string[]
    links?: string[]
    likes: number
    image?: string
    author?: MultiLanguageText
    createdAt: string
    updatedAt?: string
}

export type NewsType = {
    id: string
    multiLanguage:boolean 
    title: MultiLanguageText
    description?: MultiLanguageText
    content: MultiLanguageText
    hashTags: string[]
    image?: string
    links?: string[]
    createdAt: string
    updatedAt?: string
}

export type LibraryType = {
    id: string
    title: MultiLanguageText
    type: string
    description?: MultiLanguageText
    content: MultiLanguageText
    hashTags: string[]
    image?: string
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