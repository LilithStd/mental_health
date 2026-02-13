import { getCurrentUser } from "../serverActions/auth/auth";
import { redirect } from "next/navigation";

interface UserProps {
    id: string
}

export default async function CurrentUser({ id }: UserProps) {
    const currentAuthUser = await getCurrentUser();

    // если нет пользователя — редирект
    if (!currentAuthUser) {
        redirect("/");
    }

    return (
        <div>
            <p>
                Current Auth User Email: {currentAuthUser.email}
            </p>
        </div>
    )
}
