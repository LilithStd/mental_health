"use client";

import { createContext, useContext } from "react";
import { UserAuthType } from "./types/types";

const AuthContext = createContext<UserAuthType | null>(null);

interface AuthProviderProps {
  user: UserAuthType | null;
  children: React.ReactNode;
}

export default function AuthProvider({ user, children }: AuthProviderProps) {
  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
}

export const useUser = () => useContext(AuthContext);