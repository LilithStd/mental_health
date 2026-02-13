import { getCurrentUser } from "../serverActions/auth/auth";

interface UserProps {
    id: string
}
export default async function CurrentUser({ id }: UserProps) {
    // stores
    const currentAuthUser = await getCurrentUser()
    // 

    // components
    const userTestResults = <div>
        <h2>User Test Results:</h2>
    </div>
    // functions


    return (
        <div>
            {currentAuthUser && currentAuthUser.id ? (
                <div>
                    <p>Current Auth User Email: {currentAuthUser ? currentAuthUser.email : 'No user authenticated'}</p>
                </div>
            ) : <p>No user authenticated with this ID.</p>}

        </div>
    )
}
