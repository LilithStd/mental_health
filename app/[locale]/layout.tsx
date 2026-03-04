import { AuthProvider } from "../authClientWrapper";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

export default function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <>
            <Header locale={params.locale} />
            {children}
            <Footer locale={params.locale} />
        </>
        // <AuthProvider>


    );
}