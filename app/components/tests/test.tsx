'use client'
import { useGlobalStore } from "@/app/store/globalStore"
import Favorites from "../shared/favorites"
import { useRouter } from "next/navigation"
import { LocaleType, TestType } from "@/app/types/types";
import Form from "./form"
import { rounded, sizes, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles"
import { SIZE_ELEMENT, TEST_TYPE } from "@/app/globalConsts/globalEnum"

import { useState } from "react"
import ModalWindowMain from "../modalWindowMain"
import TestModalWindow from "./testModalWindow"
import { routes } from "@/app/helpers/helpersFunctions"
import { useLocale } from "@/app/hooks/useLocale"

import { BUTTON_READ_MORE, BUTTON_TEST, BUTTON_VIEW_ALL } from "@/translate/global/button";
import HashTags from "../shared/hashTags";
import { TYPES_OF_TEST } from "@/translate/testPage/testPage";
import { HASH_TAGS } from "@/translate/shared/hashTags";




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

    const socialRatingComponent = (type: SIZE_ELEMENT) => {
        return (
            <div className={`flex mt-2  w-full bg-primary-color/20 shadow-sm border border-primary-color/30 items-center  rounded-large `}>
                    <div className={`flex justify-between items-center w-full gap-2 rounded-large`}>
                        <div className={`flex flex-col p-2`}>
                            <span className={`text-sm italic`}>{HASH_TAGS[locale].hashTags}:</span>
                            <HashTags hashTags={['example', 'sample', 'test']} type={testType}/>
                        </div>
                        
                        <button
                            className={`p-2 m-2 cursor-pointer rounded-large bg-primary-color/50 border border-primary-color/30 shadow-sm  flex justify-center items-center`}
                            onClick={() => router.push(routesAdaptive.tests.byId(test.id))}
                        >
                            <span className={`text-sm`}>{BUTTON_TEST[locale]}</span>
                        </button>
                </div>
            </div>
        )
    }

    const previewTestComponent =
        <div className={`bg-primary-color/20 border border-primary-color/30 shadow-md p-4 rounded-large `}>
            <div>
                <h2 className={`text-lg text-center font-bold`}>{test.title[locale]}</h2>
                <span className={`text-sm`}>{test.content[locale]}</span>
            </div>
            {socialRatingComponent(testType)}
        </div>


    const fullTestComponent =

        <div className={`bg-primary-color/20 border border-primary-color/30 shadow-md p-4 rounded-large   grid gap-4  `}>
            <div className={`flex flex-col  rounded-large  p-4`}>
                <div className={`flex flex-col mb-4 bg-primary-color/30 border border-primary-color/30 rounded-large p-4`}>
                    <h2>{test.title[locale]}</h2>
                    <p>{TYPES_OF_TEST[locale]}: {test.label}</p>
                </div>

                <span>{test.content[locale]}</span>
            </div>
            <div className={`flex justify-center w-full  rounded-large p-4`}>
                <Form test={test} formResult={setTestResult} openModalCallback={onOpenModal} />
            </div>

        </div>


    // functions
    return (
        <div className={`flex flex-col p-2 max-w-6xl`}>
            {testType === SIZE_ELEMENT.SMALL ? previewTestComponent : fullTestComponent}
            {testResult && isModalOpen &&
                <ModalWindowMain openStatusCallBack={isModalOpen} closeStatusCallBack={() => setIsModalOpen(false)}>
                    <TestModalWindow result={testResult} onCloseCallback={onCloseModal} testId={test.label} />
                </ModalWindowMain>
            }
        </div>
    )
}
