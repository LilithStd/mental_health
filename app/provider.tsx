'use client';

import { THEME_COLOR_SCHEME } from "./globalConsts/globalStyles";
import { useGlobalStore } from "./store/globalStore";


export function Providers({ children }: { children: React.ReactNode }) {
    const currentThemeApp = useGlobalStore((state) => state.currentTheme)

    return (
        <main className={`${THEME_COLOR_SCHEME[currentThemeApp].background} ${THEME_COLOR_SCHEME[currentThemeApp].text} min-h-screen flex flex-col`}>
            {children}
        </main>
    );
}