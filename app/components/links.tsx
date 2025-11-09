'use client'

import { font } from "../globalConsts/globalStyles";
import { useGlobalStore } from "../store/globalStore"
import { LINKS } from "../template/text"
import Link from "next/link";

export default function ListLinks() {
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)

    return (
        <div className={`flex gap-4 items-center justify-center`}>{LINKS.map((link) => <Link className={`${font.text.size.medium} w-20`} key={link.label} href={link.path}>{link.translate[currentLanguage]}</Link>)}</div>
    )
}
