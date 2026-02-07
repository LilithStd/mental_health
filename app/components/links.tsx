'use client'

import { font, rounded, THEME_COLOR_SCHEME } from "../globalConsts/globalStyles";
import { useGlobalStore } from "../store/globalStore"
import { LINKS } from "../template/text"
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function ListLinks() {
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)
    const currentTheme = useGlobalStore((state) => state.currentTheme)
    const pathname = usePathname();
    const isLinkActive = (path: string) => {
        if (path === '/') return pathname === '/';
        return pathname === path || pathname.startsWith(path + '/');
    };
    return (
        <div className={`flex m-10 w-full items-center justify-center ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium}`}>
            {LINKS.map((link) => {
                const isActive = isLinkActive(link.path);

                return (
                    <Link
                        key={link.label}
                        href={link.path}
                        className={`
                            ${font.text.size.medium} gap-2 m-2 p-2 w-full text-center ${rounded.medium}  
                            ${isActive && `${THEME_COLOR_SCHEME[currentTheme].activeElement} `}
                        `}
                    >
                        {link.translate[currentLanguage]}
                    </Link>
                );
            })}
        </div>
    );
}
