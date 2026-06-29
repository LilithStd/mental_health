'use client'

import { usePathname } from 'next/navigation';
import Link from "next/link";
import { useLocale } from "../hooks/useLocale";
import { LocaleType } from "../types/types";
import { LINKS } from '@/translate/global/header';

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
        <div className={`flex items-center gap-4 justify-center w-full rounded-large`}>
            {LINKS.map((link) => {
                const isActive = isLinkActive(link.path);
                return (
                    <Link
                        key={link.label}
                        href={`/${locale}/${link.path}`}
                        className={`
                            text-md  p-2 text-center
                            min-w-10  flex items-center justify-center
                            rounded-large
                            border-primary-color/30 
                            transition-[background-color,border-color,color,transform]
                            duration-300
                            ease-in-out
                            ${isActive && 
                                `bg-primary-color/20 rounded-large border text-activeLink  text-shadow-lg  scale-105 
                            `}
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