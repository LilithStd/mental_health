// app/layout.tsx (client wrapper)
'use client';

import { useEffect } from 'react';
import { useAuthStore } from './store/authorizationStore';


export function AuthProvider({ children }: { children: React.ReactNode }) {
    const setUser = useAuthStore((state) => state.setUser);

    useEffect(() => {
        fetch('/api/auth/me', {
            credentials: 'include',
        })
            .then((res) => res.ok ? res.json() : null)
            .then((data) => {
                if (data?.user) {
                    setUser(data.user);
                }
            });
    }, []);

    return children;
}
