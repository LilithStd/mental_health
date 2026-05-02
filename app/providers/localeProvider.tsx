"use client";

import { createContext} from "react";

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
