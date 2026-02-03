'use client'
import { useGlobalStore } from "@/app/store/globalStore"
import Favorites from "../shared/favorites"
import { useRouter } from "next/navigation"
import Form from "./form"
import { rounded, sizes, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles"
import { TEST_TYPE } from "@/app/globalConsts/globalEnum"
import { TestType } from "@/app/tests/page"
import { useState } from "react"
import ModalWindowMain from "../modalWindowMain"
import TestModalWindow from "./testModalWindow"


interface TestProps {
    test: TestType
    testType: TEST_TYPE

}


export default function Test({ test, testType }: TestProps) {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    const currentLanguage = useGlobalStore((state) => state.currentLanguage);
    const router = useRouter();
    // const id = '1'
    // state 
    const [testResult, setTestResult] = useState<string | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    // functions
    const onCloseModal = () => {
        setIsModalOpen(false);
        setTestResult(null);
    }
    const onOpenModal = () => {
        setIsModalOpen(true);
    }
    // components
    const buttonReadMore =

        <button
            className={`px-4 py-2 mt-4 cursor-pointer rounded-md ${THEME_COLOR_SCHEME[currentTheme].buttonContainer}`}
            onClick={() => router.push(`/tests/${test.id}`)}
        >
            Read More
        </button>


    const previewTestComponent =
        <div className={`${THEME_COLOR_SCHEME[currentTheme].subContainer} p-4 ${rounded.high} border-2`}>
            <div>
                <h2>{test.title[currentLanguage]}</h2>
                <p>Type: {test.label}</p>
                <span>Group: {test.content}</span>
            </div>
            {buttonReadMore}
        </div>


    const fullTestComponent =

        <div className={`${THEME_COLOR_SCHEME[currentTheme].subContainer} p-4 rounded-md  border-2 grid gap-4 grid-cols-2`}>
            <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium}  p-4`}>
                <div className={`flex flex-col mb-4 ${THEME_COLOR_SCHEME[currentTheme].subContainer} ${rounded.medium} p-4`}>
                    <h2>{test.title[currentLanguage]}</h2>
                    <p>Type: {test.label}</p>
                </div>

                <span>Description: {test.content}</span>
            </div>
            <div className={`flex justify-center  ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium} p-4`}>
                <Form test={test} formResult={setTestResult} openModalCallback={onOpenModal} />
            </div>

        </div>


    // functions
    return (
        <div className={`flex flex-col p-4 ${sizes.width.maxWidth}`}>
            {testType === TEST_TYPE.PREVIEW ? previewTestComponent : fullTestComponent}
            {testResult && isModalOpen &&
                <ModalWindowMain openStatusCallBack={isModalOpen} closeStatusCallBack={() => setIsModalOpen(false)}>
                    <TestModalWindow result={testResult} onCloseCallback={onCloseModal} testId={test.label} />
                </ModalWindowMain>
            }
        </div>
    )
}
