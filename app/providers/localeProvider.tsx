"use client";

import { createContext, useContext } from "react";

type LocaleContextType = {
    locale: string;
};

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({
    locale,
    children,
}: {
    locale: string;
    children: React.ReactNode;
}) {
    return (
        <LocaleContext.Provider value={{ locale }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    const context = useContext(LocaleContext);

    if (!context) {
        throw new Error("useLocale must be used inside LocaleProvider");
    }

    return context.locale;
}