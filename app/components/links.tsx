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
        <div className={`flex p-2 items-center justify-center bg-mainContainer w-full rounded-large`}>
            {LINKS.map((link) => {
                const isActive = isLinkActive(link.path);
                return (
                    <Link
                        key={link.label}
                        href={`/${locale}/${link.path}`}
                        className={`
                            text-lg gap-2 indents-container-sub w-1/4 text-center rounded-2xl 
                            ${isActive && `bg-activeElement scale-105 `}
                        `}
                    >
                        {link.translate[locale]}
                    </Link>
                );
            })}
        </div>
    );
}
