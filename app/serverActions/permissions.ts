'use server'

import { ROLE_AUTH_USER_PRIVILEGE } from "../globalConsts/globalEnum";
import { UserAuthType } from "../types/types";

export async function canEditContent(user: UserAuthType | null) {
  // console.log('Checking edit content permission for user:', user)
  return user?.privilege === ROLE_AUTH_USER_PRIVILEGE.EDIT_CONTENT;
}