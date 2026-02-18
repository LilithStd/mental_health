'use client'
import ModalWindowWrapper from "../modalWindows/modalWindowWrapper"
import { useAuth } from "@/app/authClientWrapper"


export default function AuthorizationMain() {
    const currentAuthUser = useAuth()

    return (
        <div className="flex w-full flex-col text-center items-center justify-center">
            <ModalWindowWrapper currentAuthUser={currentAuthUser ?? undefined} />
        </div>
    )
}
