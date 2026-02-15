'use client'

import { useGlobalStore } from "../store/globalStore"
import { LINKS } from "../template/text"
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function ListLinks() {
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const pathname = usePathname();
    const isLinkActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname === path || pathname.startsWith(path + '/');
    };
    return (
        <div className={`flex p-2 items-center justify-center bg-mainContainer w-full rounded-large`}>
            {LINKS.map((link) => {
                const isActive = isLinkActive(link.path);

                return (
                    <Link
                        key={link.label}
                        href={link.path}
                        className={`
                            text-lg gap-2 indents-container-sub w-1/4 text-center rounded-2xl 
                            ${isActive && `bg-activeElement scale-105 `}
                        `}
                    >
                        {link.translate[currentLanguage]}
                    </Link>
                );
            })}
        </div>
    );
}
