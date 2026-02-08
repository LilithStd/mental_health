'use client'

import { useEffect, useState } from "react";
import Search from "../components/shared/search";
import Test from "../components/tests/test";
import { TEST_TYPE } from "../globalConsts/globalEnum";
import { rounded, indents, sizes } from "../globalConsts/globalStyles";
import { useGlobalStore } from "../store/globalStore";

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
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    useEffect(() => {
        fetch('/api/tests')
            .then(res => res.json())
            .then(data => {
                setTests(data.tests)
                setLoading(false)
            })
    }, [])

    return (
        <div className={`flex flex-col bg-mainContainer ${rounded.medium} flex-1 ${indents.container.main} items-center`}>
            {/* <Search /> */}
            <h2>Tests Page</h2>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${sizes.width.maxWidth}`}>
                {loading ? <p>Loading...</p> : tests.map((test) => (
                    <Test key={test.id} test={test} testType={TEST_TYPE.PREVIEW} />
                ))}
            </div>

        </div>
    )
}
