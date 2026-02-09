'use client';

import { useEffect } from "react";
import { useGlobalStore } from "./store/globalStore";
import { THEME } from "./globalConsts/globalEnum";


export function Providers({ children, styles }: { children: React.ReactNode, styles?: string }) {
    const currentThemeApp = useGlobalStore((state) => state.currentTheme)
    useEffect(() => {
        const isDark = currentThemeApp === THEME.DARK
        document.documentElement.classList.toggle('dark', isDark)
    }, [currentThemeApp])

    return (

        <main className={`min-h-screen flex flex-col`}>
            {children}
        </main>

    );
}