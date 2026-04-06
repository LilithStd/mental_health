'use client'
import Test from "@/app/components/tests/test";
import { SIZE_ELEMENT, TEST_TYPE } from "@/app/globalConsts/globalEnum";
import { use, useEffect, useState } from "react"
import { TestType } from "../page";
import Loading from "@/app/components/shared/loading";
import { routes } from "@/app/helpers/helpersFunctions";
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import ReturnButton from "@/app/components/returnButton";


export default function TestCurrent({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = use(params)
    const [currentTest, setCurrentTest] = useState<TestType | null>(null);
    const [error, setError] = useState(false)
    const  locale  = useLocale() as LocaleType;
    const routesAdaptive = routes(locale)
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
        <div className={`flex flex-col indents-main-container rounded-large flex-1 items-center`}>
            <div className={`flex flex-col flex-1  max-w-6xl  rounded-large bg-primary-color/20 border border-primary-color/20 shadow-md  p-4`}>
                <ReturnButton pathToReturn={routesAdaptive.tests.root} />
                {error ? "Error loading test." : currentTest ? <Test test={currentTest} testType={SIZE_ELEMENT.FULL} /> : <Loading fullScreen={true} />}
            </div>


        </div>
    )
}
