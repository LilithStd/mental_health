'use client'
import AuthorisationIcon from "@/public/icons/user/UserLogout.svg"
import Link from "next/link"
import { APP_PATH_ROUTER } from "@/app/globalConsts/globalEnum"
import { UserAuthType } from "@/app/types/types"
import { logoutAction } from "@/app/serverActions/auth/auth"
import { useRouter } from "next/navigation"

interface AuthUserComponentProps {
    authUser: UserAuthType,
    callBackModal: () => void
}

export default function AuthUserComponent({ authUser }: AuthUserComponentProps) {
    const router = useRouter()
    const logoutCurrentAuthUserHandler = async () => {
        await logoutAction()
        router.refresh()

    }
    return (
        <div className={`flex flex-col items-center justify-center gap-2`} >
            <AuthorisationIcon width={48} height={48} onClick={logoutCurrentAuthUserHandler} />
            <div className={`cursor-pointer`}>
                <Link href={`${APP_PATH_ROUTER.USERS}/${authUser.id}`} className={`hover:bg-hover cursor-pointer`} >{authUser.email}</Link>
            </div>

        </div>
    )
}
