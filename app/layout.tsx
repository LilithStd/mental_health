
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { Providers } from "./provider";
import { AuthProvider } from "./authClientWrapper";
import { getCurrentUser } from "./serverActions/auth/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mental health",
  description: "App about mental health",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentAuthUser = await getCurrentUser()
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased `}
      >
        <Providers>
          <AuthProvider user={currentAuthUser}>
            <Header />
            {children}
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
