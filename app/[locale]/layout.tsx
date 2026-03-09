import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { LocaleProvider } from "../providers/localeProvider";
import { LocaleType } from "../types/types";

export default function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: LocaleType };
}) {
    const { locale } = params;

    return (
        <LocaleProvider locale={locale}>
            <Header locale={locale} />
            {children}
            <Footer locale={locale} />
        </LocaleProvider>
    );
}