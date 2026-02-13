import { getCurrentUser } from "@/app/serverActions/auth/auth"
import ModalWindowWrapper from "../modalWindows/modalWindowWrapper"


export default async function AuthorizationMain() {
    const currentAuthUser = await getCurrentUser()

    return (
        <div className="flex w-full flex-col text-center items-center justify-center">
            <ModalWindowWrapper currentAuthUser={currentAuthUser ?? undefined} />
        </div>
    )
}
