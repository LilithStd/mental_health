'use client'

import { useRouter } from "next/navigation"

interface ReturnButtonProps {
    pathToReturn: string;   // any props if needed
}

export default function ReturnButton({ pathToReturn }: ReturnButtonProps) {
    const router = useRouter()

    return (
        <button>
            <span onClick={() => router.push(pathToReturn)} className="text-buttonContainer cursor-pointer">Return</span>
        </button>
    )
}
