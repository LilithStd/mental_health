'use client'

import { useEffect, useState } from "react";
import Search from "../components/shared/search";
import Test from "../components/tests/test";
import { TEST_TYPE } from "../globalConsts/globalEnum";
import { THEME_COLOR_SCHEME, rounded, indents } from "../globalConsts/globalStyles";
import { useGlobalStore } from "../store/globalStore";

type QuestionVariant = {
    id: string
    title: string
    count: number
}
type Question = {
    id: string
    variant: QuestionVariant[]
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
    console.log('tests:', tests);
    return (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium} flex-1 ${indents.container.main} items-center text-center`}>
            {/* <Search /> */}
            <h2>Tests Page</h2>
            {loading ? <p>Loading...</p> : tests.map((test) => (
                <Test key={test.id} test={test} testType={TEST_TYPE.PREVIEW} />
            ))}
        </div>
    )
}
