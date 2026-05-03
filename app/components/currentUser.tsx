'use client';
import { getCurrentUser } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { useUser } from "../authClientWrapper";
import { UserAuthType } from "../types/types";

interface UserProps {
    currentAuthUser: UserAuthType
}

export default  function CurrentUser() {
    const currentAuthUser = useUser() as UserAuthType;
    console.log('currentAuthUser in CurrentUser component', currentAuthUser)
    // если нет пользователя — редирект
    if (!currentAuthUser) {
        redirect("/");
    }

    return (
        <div className={``}>
            <p>
                Current Auth User Email: {currentAuthUser.email}
            </p>
        </div>
    )
}
