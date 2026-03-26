import { get } from "http";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { LocaleProvider } from "../providers/localeProvider";
import { LocaleType } from "../types/types";
import { getLocale } from "../hooks/server/getLocale";

export default async function LocaleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = await getLocale() as LocaleType


    return (
        <LocaleProvider locale={locale}>
            <Header />
            {children}
            <Footer />
        </LocaleProvider>
    );
}