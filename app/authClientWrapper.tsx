'use client'

import { createContext, useContext } from "react"
import { UserAuthType } from "./types/types"

const AuthContext = createContext<UserAuthType | null>(null)
export const useAuth = () => useContext(AuthContext)

interface AuthProviderProps {
    user: UserAuthType
    children: React.ReactNode
}

export function AuthProvider({ user, children }: AuthProviderProps) {
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}


