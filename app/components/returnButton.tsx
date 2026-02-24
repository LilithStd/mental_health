'use client'

import { useRouter } from "next/navigation"
import ReturnIcon from '@/public/icons/ArrowReturn.svg'
interface ReturnButtonProps {
    pathToReturn: string;   // any props if needed
}

export default function ReturnButton({ pathToReturn }: ReturnButtonProps) {
    const router = useRouter()

    if (!pathToReturn) return null; // or some fallback UI

    return (
        <button className={` bg-buttonContainer cursor-pointer w-1/5  p-2 rounded-circle`} onClick={() => router.push(pathToReturn)}>

            <span className="cursor-pointer">
                <ReturnIcon className="inline-block mr-2 w-6" />
                Return</span>
        </button>
    )
}
