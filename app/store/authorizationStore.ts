// store/auth.store.ts
import { create } from 'zustand';

type User = {
  id: string;
  email: string;
};

type AuthState = {
  user: User | null;
  isAuth: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuth: false,

  setUser: (user) =>
    set({
      user,
      isAuth: !!user,
    }),

  logout: () =>
    set({
      user: null,
      isAuth: false,
    }),
}));
