'use client'
import { LINKS } from "../template/text"
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { useLocale } from "../hooks/useLocale";

export default function ListLinks() {
    const pathname = usePathname();
    const locale = useLocale();


    const isLinkActive = (path: string) => {
        const base = `/${locale}`

        if (path === base) {
            return pathname === base
        }

        return pathname === path || pathname.startsWith(`${path}/`)
    }
    return (
        <div className={`flex p-2 items-center justify-center bg-mainContainer w-full rounded-large`}>
            {LINKS.map((link) => {
                const isActive = isLinkActive(link.path);
                console.log('link path:', link.path);
                return (
                    <Link
                        key={link.label}
                        href={link.path}
                        className={`
                            text-lg gap-2 indents-container-sub w-1/4 text-center rounded-2xl 
                            ${isActive && `bg-activeElement scale-105 `}
                        `}
                    >
                        {link.translate.en}
                    </Link>
                );
            })}
        </div>
    );
}
