import { getCurrentUser } from "@/app/serverActions/auth/auth"
import NoneAuthUserComponent from "./noneAuthUserComponent"
import AuthUserComponent from "./authUserComponent"
import ModalWindowWrapper from "../modalWindows/modalWindowWrapper"


export default async function AuthorizationMain() {
    const currentAuthUser = await getCurrentUser()

    return (
        <div className="flex w-full flex-col text-center items-center justify-center">
            {currentAuthUser ? (
                <AuthUserComponent authUser={currentAuthUser} />
            ) : (
                <NoneAuthUserComponent />
            )}
            <ModalWindowWrapper />
        </div>
    )
}
