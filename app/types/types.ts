import { ROLE_AUTH_USER_PRIVILEGE } from "../globalConsts/globalEnum"

export type UserAuthType = {
    id: number,
    email: string,
    role: string
    privilege: ROLE_AUTH_USER_PRIVILEGE
}