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

    return (
        <div className="flex m-10 w-full items-center justify-center">
            {LINKS.map((link) => {
                const isActive = pathname === link.path;

                return (
                    <Link
                        key={link.label}
                        href={link.path}
                        className={`
                            ${font.text.size.medium} gap-2 w-full text-center ${rounded.medium} p-2 hover:underline hover:underline-offset-4
                            ${isActive ? `${THEME_COLOR_SCHEME[currentTheme].activeElement} ` : 'text-gray-500'}
                        `}
                    >
                        {link.translate[currentLanguage]}
                    </Link>
                );
            })}
        </div>
    );
}
