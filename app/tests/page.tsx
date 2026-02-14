'use client'

import { useEffect, useState } from "react";
import Search from "../components/shared/search";
import Test from "../components/tests/test";
import { TEST_TYPE } from "../globalConsts/globalEnum";
import Loading from "../components/shared/loading";


type QuestionVariant = {
    id: string
    title: string
    count: number
}
type Question = {
    title: string
    variants: QuestionVariant[]
}

export type TestType = {
    id: number
    label: string
    title: {
        EN: string
        RU: string
        LV: string
    }
    content: string
    questions: Question[]
}

export default function Tests() {
    // states
    const [tests, setTests] = useState<TestType[]>([]);
    const [loading, setLoading] = useState(true);
    // stores

    useEffect(() => {
        fetch('/api/tests')
            .then(res => res.json())
            .then(data => {
                setTests(data.tests)
                setLoading(false)
            })
    }, [])

    return (
        <div className={`flex flex-col indents-main-container rounded-medium flex-1 items-center`}>
            {/* <Search /> */}
            <div className={`flex flex-col flex-1 max-w-6xl rounded-medium bg-mainContainer`}>
                <div className={`grid grid-cols-1 md:grid-cols-2  mb-4 max-content-main-container`}>
                    {loading ? <Loading fullScreen={true} /> : tests.map((test) => (
                        <Test key={test.id} test={test} testType={TEST_TYPE.PREVIEW} />
                    ))}
                </div>

            </div>

        </div>
    )
}
