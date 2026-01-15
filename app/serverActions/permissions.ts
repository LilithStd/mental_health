'use server'

import { ROLE_AUTH_USER_PRIVILEGE } from "../globalConsts/globalEnum";
import { User } from "../store/mockAuthStore";

export async function canEditContent(user: User | null) {
  return user?.privilege === ROLE_AUTH_USER_PRIVILEGE.EDIT_CONTENT;
}