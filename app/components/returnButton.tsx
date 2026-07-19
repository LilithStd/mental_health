'use client'

import { useRouter } from "next/navigation"
import ReturnIcon from '@/public/icons/ArrowReturn.svg'
import { LocaleType } from "../types/types";
import { useLocale } from "../hooks/useLocale";
import { BUTTON_RETURN } from "@/translate/global/button";
interface ReturnButtonProps {
    pathToReturn: string;   // any props if needed
}

export default function ReturnButton({ pathToReturn }: ReturnButtonProps) {
    const router = useRouter()
    const locale = useLocale() as LocaleType;

    if (!pathToReturn) return null;

    return (
        <button className={` bg-primary-color/50 cursor-pointer   p-2 rounded-circle`} onClick={() => router.push(pathToReturn)}>

            <span className="cursor-pointer">
                <ReturnIcon className="inline-block mr-2 w-6" />
                {BUTTON_RETURN[locale]}</span>
        </button>
    )
}
