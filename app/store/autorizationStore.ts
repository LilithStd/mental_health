import { create } from "zustand";

interface AuthorizationState {
    isAuthorized: boolean;
    auuthorizeRole: string;
    setIsAuthorized: (isAuthorized: boolean) => void;
}

export const useAuthorizationStore = create<AuthorizationState>((set,get) => ({
    isAuthorized: false,
    auuthorizeRole: '',
    setIsAuthorized: (isAuthorized: boolean) => {
        set({ isAuthorized });
    },
}));