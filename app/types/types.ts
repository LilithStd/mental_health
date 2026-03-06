import { ROLE_AUTH_USER_PRIVILEGE } from "../globalConsts/globalEnum"

export type UserAuthType = {
    id: number,
    email: string,
    role: string
    privilege: ROLE_AUTH_USER_PRIVILEGE
}

export const LOCALES = ['en', 'lv', 'ru'] as const
export type LocaleType = (typeof LOCALES)[number]