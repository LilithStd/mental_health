'use client'

import { useGlobalStore } from "../store/globalStore";
import { useMockAuthStore } from "../store/mockAuthStore"

interface UserProps {
    id: string
}
export default function CurrentUser({ id }: UserProps) {
    // stores
    const currentUsers = useMockAuthStore((state) => state.currentAuthUser);
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
