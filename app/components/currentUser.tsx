'use client'

import { useAuthorizationStore } from "../store/authorizationStore";


interface UserProps {
    id: string
}
export default function CurrentUser({ id }: UserProps) {
    // stores
    const currentUsers = useAuthorizationStore((state) => state.currentAuthUser);
    // 

    console.log('Current User Component - currentUsers:', currentUsers);
    // components
    const userTestResults = <div>
        <h2>User Test Results:</h2>
    </div>
    // functions


    return (
        <div>
            {currentUsers && currentUsers.id ? (
                <div>
                    <p>Current Auth User Email: {currentUsers ? currentUsers.email : 'No user authenticated'}</p>
                </div>
            ) : <p>No user authenticated with this ID.</p>}

        </div>
    )
}
