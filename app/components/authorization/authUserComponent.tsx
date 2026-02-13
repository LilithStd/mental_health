import AuthorisationIcon from "@/public/icons/user/UserLogout.svg"
import Link from "next/link"
import { APP_PATH_ROUTER } from "@/app/globalConsts/globalEnum"
import { UserAuthType } from "@/app/types/types"

interface AuthUserComponentProps {
    authUser: UserAuthType,
    callBackModal: () => void
}

export default function AuthUserComponent({ authUser, callBackModal }: AuthUserComponentProps) {
    return (
        <div className={`flex flex-col items-center justify-center gap-2`} >
            <AuthorisationIcon width={48} height={48} onClick={callBackModal} />
            <div className={`cursor-pointer`}>
                <Link href={`${APP_PATH_ROUTER.USERS}/${authUser.id}`} className={`hover:bg-hover cursor-pointer`} >{authUser.email}</Link>
            </div>

        </div>
    )
}
