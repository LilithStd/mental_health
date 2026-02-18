'use client'
import { useState } from "react"
import AuthorisationIcon from "@/public/icons/user/UserCircle.svg"
import { UserAuthType } from "@/app/types/types"
import { logoutAction } from "@/app/serverActions/auth/auth"
import { useRouter, usePathname } from "next/navigation"
import { routes } from "@/app/helpers/helpersFunctions"

interface AuthUserComponentProps {
    authUser: UserAuthType,
    callBackModal: () => void
}

export default function AuthUserComponent({ authUser }: AuthUserComponentProps) {
    const router = useRouter()
    const pathname = usePathname()
    const [isOpenUserMenu, setIsOpenUserMenu] = useState(false)
    // handlers
    const toggleUserMenuHandler = () => {
        setIsOpenUserMenu((prev) => !prev)
    }
    const logoutCurrentAuthUserHandler = async () => {
        await logoutAction()
        router.refresh()

    }
    const redirectToUserPageHandler = () => {
        setIsOpenUserMenu(false)
        const targetPath = routes.users.byId(authUser.id)
        if (pathname !== targetPath) {
            router.push(targetPath)
        }
    }
    //
    // components
    const userMenuComponent = () => {
        return (
            <div
                className={`
                absolute
                top-full
                bg-mainContainer
                shadow-md
                rounded-medium
                mt-5
                z-20
                ${isOpenUserMenu ? 'min-h-40 opacity-100' : 'max-h-0 opacity-0'}
            `}
            >
                <div className={`flex flex-col p-10 gap-2`}>
                    user Menu
                    <button className={`cursor-pointer p-2 bg-mainContainer rounded-medium hover:bg-hover`} onClick={redirectToUserPageHandler}>
                        {authUser.email}
                    </button>
                    <button className={`w-full text-left px-4 py-2 bg-buttonContainer rounded-medium hover:bg-hover`} onClick={logoutCurrentAuthUserHandler}>Logout</button>
                </div>
            </div>
        )
    }
    //  

    return (
        <div className={`flex flex-col items-center justify-center gap-2 cursor-pointer`} >
            <AuthorisationIcon width={48} height={48} fill={`var(--color-activeElement)`} onClick={toggleUserMenuHandler} />

            {isOpenUserMenu && userMenuComponent()}
        </div>
    )
}
