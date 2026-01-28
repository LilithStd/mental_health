'use client'

import { useAuthorizationStore } from "../store/authorizationStore";
import { useGlobalStore } from "../store/globalStore";

interface UserProps {
    id: string
}
export default function CurrentUser({ id }: UserProps) {
    // stores
    const currentUsers = useAuthorizationStore((state) => state.currentAuthUser);
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    // 
    return (
        <div>
            {currentUsers && currentUsers.id === id ? (
                <div>
                    <p>User ID: {currentUsers.id}</p>
                    <p>Current Auth User Email: {currentUsers ? currentUsers.email : 'No user authenticated'}</p>
                </div>
            ) : <p>No user authenticated with this ID.</p>}

        </div>
    )
}
