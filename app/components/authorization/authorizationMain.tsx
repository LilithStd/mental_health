import { getCurrentUser } from "@/app/serverActions/auth/auth"
import NoneAuthUserComponent from "./noneAuthUserComponent"
import AuthUserComponent from "./authUserComponent"


export default async function AuthorizationMain() {
    const authUser = await getCurrentUser()
    return (
        <div
            className={`flex w-full flex-col text-center items-center justify-center`}
        >
            {authUser ? <AuthUserComponent authUser={authUser} /> : <NoneAuthUserComponent />}
        </div>
    )
}
