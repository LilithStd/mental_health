'use client'
import { useGlobalStore } from "@/app/store/globalStore"
import Favorites from "../shared/favorites"
import { useRouter } from "next/navigation"
import { LocaleType } from "@/app/types/types";
import Form from "./form"
import { rounded, sizes, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles"
import { SIZE_ELEMENT, TEST_TYPE } from "@/app/globalConsts/globalEnum"
import { TestType } from "@/app/[locale]/tests/page"
import { useState } from "react"
import ModalWindowMain from "../modalWindowMain"
import TestModalWindow from "./testModalWindow"
import { routes } from "@/app/helpers/helpersFunctions"
import { useLocale } from "@/app/hooks/useLocale"
import { TYPES_OF_TEST } from "@/translate/test/test";
import { BUTTON_READ_MORE, BUTTON_VIEW_ALL } from "@/translate/global/button";
import HashTags from "../shared/hashTags";




interface TestProps {
    test: TestType
    testType: SIZE_ELEMENT

}


export default function Test({ test, testType }: TestProps) {
    // consts
    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    // 
    // stores

    // const currentLanguage = useGlobalStore((state) => state.currentLanguage);
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
            className={`px-4 py-2 mt-4 cursor-pointer rounded-large bg-buttonContainer`}
            onClick={() => router.push(routesAdaptive.tests.byId(test.id))}
        >
            <span className={`text-shadow-lg`}>{BUTTON_VIEW_ALL[locale]}</span>
        </button>
    const socialRatingComponent = (type: SIZE_ELEMENT) => {
        return (
            <div className={`flex  w-full bg-primary-color/30 shadow-md border border-primary-color/30  gap-2 justify-center items-center align-center  rounded-large p-2`}>
                <div className={`flex flex-col w-full gap-2`}>
                    <div className={`flex items-center p-2 gap-2`}>
                        <HashTags hashTags={['example', 'sample', 'test']} type={testType}/>
                    </div>
                    {buttonReadMore}
                </div>
            </div>
        )
    }

    const previewTestComponent =
        <div className={`bg-primary-color/20 border border-primary-color/30 shadow-md p-4 rounded-large `}>
            <div>
                <h2>{test.title[locale]}</h2>
                <p>{TYPES_OF_TEST[locale]}: {test.label}</p>
                <span>Group: {test.content[locale]}</span>
            </div>
            {socialRatingComponent(testType)}
        </div>


    const fullTestComponent =

        <div className={`bg-primary-color/20 border border-primary-color/30 shadow-md p-4 rounded-large   grid gap-4  grid-cols-[0.5fr_1fr]`}>
            <div className={`flex flex-col  rounded-large  p-4`}>
                <div className={`flex flex-col mb-4 bg-primary-color/30 rounded-large p-4`}>
                    <h2>{test.title[locale]}</h2>
                    <p>{TYPES_OF_TEST[locale]}: {test.label}</p>
                </div>

                <span>{test.content[locale]}</span>
            </div>
            <div className={`flex justify-center  rounded-large p-4`}>
                <Form test={test} formResult={setTestResult} openModalCallback={onOpenModal} />
            </div>

        </div>


    // functions
    return (
        <div className={`flex flex-col p-4 max-w-6xl`}>
            {testType === SIZE_ELEMENT.PREVIEW ? previewTestComponent : fullTestComponent}
            {testResult && isModalOpen &&
                <ModalWindowMain openStatusCallBack={isModalOpen} closeStatusCallBack={() => setIsModalOpen(false)}>
                    <TestModalWindow result={testResult} onCloseCallback={onCloseModal} testId={test.label} />
                </ModalWindowMain>
            }
        </div>
    )
}
