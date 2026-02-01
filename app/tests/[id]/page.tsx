'use client'
import Test from "@/app/components/tests/test";
import { TEST_TYPE } from "@/app/globalConsts/globalEnum";
import { THEME_COLOR_SCHEME, rounded, indents } from "@/app/globalConsts/globalStyles"
import { useGlobalStore } from "@/app/store/globalStore";
import { use, useEffect, useState } from "react"
import { TestType } from "../page";


export default function TestCurrent({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    const { id } = use(params)
    const [currentTest, setCurrentTest] = useState<TestType | null>(null);
    const [error, setError] = useState(false)
    useEffect(() => {
        fetch(`/api/tests?id=${id}`)
            .then(r => {
                if (!r.ok) {
                    setError(true)
                    return null
                }
                return r.json()
            })
            .then(data => {
                if (data) {
                    setCurrentTest(data.test)
                }
            })
    }, [id])
    return (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium} flex-1 ${indents.container.main} items-center text-center`}>
            test page {id}
            <div>
                {error ? "Error loading test." : currentTest ? <Test test={currentTest} testType={TEST_TYPE.FULL} /> : "Loading..."}
            </div>
        </div>
    )
}
