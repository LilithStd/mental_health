'use client'

import { useGlobalStore } from "../store/globalStore"
import { LINKS } from "../template/text"
import Link from "next/link";

export default function ListLinks() {
    const currentLanguage = useGlobalStore((state) => state.currentLanguage)

    return (
        <div className={`flex gap-2`}>{LINKS.map((link) => <Link key={link.label} href={link.path}>{link.translate[currentLanguage]}</Link>)}</div>
    )
}
