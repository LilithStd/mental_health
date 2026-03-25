'use client'
import { LINKS } from "../template/text"
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { useLocale } from "../hooks/useLocale";
import { LocaleType } from "../types/types";

export default function ListLinks() {
    const pathname = usePathname();
    const locale = useLocale() as LocaleType;

    const isLinkActive = (path: string) => {
        const base = `/${locale}`;
        const normalized = path.startsWith("/") ? path : `/${path}`;
        const fullPath = `${base}${normalized}`;

        if (normalized === "/") {
            return pathname === base;
        }

        return pathname === fullPath || pathname.startsWith(fullPath + "/");
    };
    return (
        <div className={`flex items-center justify-center  w-full rounded-large`}>
            {LINKS.map((link) => {
                const isActive = isLinkActive(link.path);
                return (
                    <Link
                        key={link.label}
                        href={`/${locale}/${link.path}`}
                        className={`
                            text-lg gap-2  w-1/4 text-center rounded-2xl 
                            ${isActive && `underline underline-offset-4 text-shadow-lg  scale-105 `}
                        `}
                    >
                        {link.translate[locale]}
                    </Link>
                );
            })}
        </div>
    );
}

// <Link
//     key={link.label}
//     href={`/${locale}/${link.path}`}
//     className={`
//                             text-lg gap-2  w-1/4 text-center rounded-2xl 
//                             ${isActive && `bg-activeElement/40 backdrop-blur-md scale-105 `}
//                         `}
// >
//     {link.translate[locale]}
// </Link>