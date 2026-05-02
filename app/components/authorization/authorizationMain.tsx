'use client'

import ModalWindowWrapper from "../modalWindows/modalWindowWrapper"
import { useUser } from "@/app/authClientWrapper"



export default function AuthorizationMain() {
    const currentAuthUser = useUser()

    return (
        <div className="flex w-1/2 flex-col text-center items-center justify-center">
            <ModalWindowWrapper currentAuthUser={currentAuthUser} />
        </div>
    )
}
