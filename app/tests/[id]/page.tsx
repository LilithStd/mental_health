'use client'
import Test from "@/app/components/tests/test";
import { TEST_TYPE } from "@/app/globalConsts/globalEnum";
import { use, useEffect, useState } from "react"
import { TestType } from "../page";
import Loading from "@/app/components/shared/loading";


export default function TestCurrent({
    params,
}: {
    params: Promise<{ id: string }>
}) {
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
        <div className={`flex flex-col indents-main-container rounded-medium flex-1 items-center`}>
            <div className={`flex flex-col flex-1  max-w-6xl  rounded-medium bg-mainContainer  p-4`}>
                {error ? "Error loading test." : currentTest ? <Test test={currentTest} testType={TEST_TYPE.FULL} /> : <Loading fullScreen={true} />}
            </div>


        </div>
    )
}
