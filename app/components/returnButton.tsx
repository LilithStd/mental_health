'use client'

import { useRouter } from "next/navigation"

interface ReturnButtonProps {
    pathToReturn: string;   // any props if needed
}

export default function ReturnButton({ pathToReturn }: ReturnButtonProps) {
    const router = useRouter()

    if (!pathToReturn) return null; // or some fallback UI

    return (
        <button className={` bg-buttonContainer cursor-pointer w-fit  p-2 rounded-circle`}>
            <span onClick={() => router.push(pathToReturn)} className="cursor-pointer">Return</span>
        </button>
    )
}
