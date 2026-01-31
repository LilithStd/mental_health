'use client'
import { useGlobalStore } from "@/app/store/globalStore"
import Favorites from "../shared/favorites"
import { useRouter } from "next/navigation"
import Form from "./form"
import { sizes, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles"
import { TEST_TYPE } from "@/app/globalConsts/globalEnum"

interface TestProps {
    id: string
    name: string
    type: string
    group: string
    testType: TEST_TYPE

}


export default function Test({ name, type, group, testType }: TestProps) {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    const router = useRouter();
    const id = '1'
    // state 
    // components
    const buttonReadMore =

        <button
            className={`px-4 py-2 mt-4 cursor-pointer rounded-md ${THEME_COLOR_SCHEME[currentTheme].buttonContainer}`}
            onClick={() => router.push(`/tests/${id}`)}
        >
            Read More
        </button>


    const previewTestComponent =

        <div className={`${THEME_COLOR_SCHEME[currentTheme].subContainer} p-4 rounded-md  border-2`}>
            <div>
                <h2>{name}</h2>
                <p>Type: {type}</p>
                <span>Group: {group}</span>
            </div>
            {buttonReadMore}
        </div>


    const fullTestComponent =

        <div className={`${THEME_COLOR_SCHEME[currentTheme].subContainer} p-4 rounded-md  border-2`}>
            <h2>{name}</h2>
            <p>Type: {type}</p>
            <span>Group: {group}</span>
            <Form />
        </div>


    // functions
    return (
        <div className={`flex flex-col p-4 m-4  rounded-md ${sizes.width.maxWidth}`}>
            {testType === TEST_TYPE.PREVIEW ? previewTestComponent : fullTestComponent}
        </div>
    )
}
