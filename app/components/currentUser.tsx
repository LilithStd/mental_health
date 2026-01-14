'use client'

import { useMockAuthStore } from "../store/mockAuthStore"

interface UserProps {
    id: string
}
export default function CurrentUser({ id }: UserProps) {
    // stores
    const currentUsers = useMockAuthStore((state) => state.currentAuthUser)
    console.log('Current Users in CurrentUser component:', currentUsers);
    // 
    return (
        <div>
            {currentUsers && currentUsers.id === id ? (
                <div>
                    {/* <h1>User Component</h1>
                    <p>User ID: {currentUsers.id}</p> */}
                    <p>Current Auth User Email: {currentUsers ? currentUsers.email : 'No user authenticated'}</p>
                </div>
            ) : <p>No user authenticated with this ID.</p>}

        </div>
    )
}
