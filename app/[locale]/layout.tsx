import Footer from "../components/footer/footer";
import Header from "../components/header/header";

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return (
        <>
            <Header locale={locale} />
            {children}
            <Footer locale={locale} />
        </>
    );
}