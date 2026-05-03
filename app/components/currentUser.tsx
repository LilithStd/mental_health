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
            <h2>Current User Info:</h2>
            <p>Email: {currentAuthUser.email}</p>
            <p>Role: {currentAuthUser.role}</p>
            <p>Privileges: {currentAuthUser.privileges}</p>
          
        </div>
    )
}
