import AuthorisationIcon from "@/public/icons/user/User.svg"
import Link from "next/link"
import { APP_PATH_ROUTER } from "@/app/globalConsts/globalEnum"

import { User } from "@/app/serverActions/usersStorage"

interface AuthUserComponentProps {
    authUser: User
}

export default async function AuthUserComponent({ authUser }: AuthUserComponentProps) {
    return (
        <div className={`flex flex-col items-center justify-center gap-2`} >
            <AuthorisationIcon width={48} height={48} />
            <div className={`cursor-pointer`}>
                <Link href={`${APP_PATH_ROUTER.USERS}/${authUser.id}`} className={`hover:bg-hover cursor-pointer`} >{authUser.email}</Link>
            </div>

        </div>
    )
}
