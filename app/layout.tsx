
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poiret_One, Jura, Alumni_Sans_Pinstripe, Pattaya } from "next/font/google";
import "./globals.css";


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

const poiret = Poiret_One({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  variable: '--font-poiret',
});

const jura = Jura({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  variable: '--font-jura',
});
const alumniSansPinstripe = Alumni_Sans_Pinstripe({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  variable: '--font-alumni-sans-pinstripe',
});

const pattaya = Pattaya({
  subsets: ['latin', 'cyrillic'],
  weight: '400',
  variable: '--font-pattaya',
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
        className={`${geistSans.variable} ${geistMono.variable} ${poiret.variable} ${jura.variable} ${alumniSansPinstripe.variable} ${pattaya.variable} bg-background text-foreground antialiased `}
      >
        <Providers>
          <AuthProvider user={currentAuthUser}>
            {children}
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
