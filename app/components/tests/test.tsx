'use client'
import { useGlobalStore } from "@/app/store/globalStore"
import Favorites from "../shared/favorites"
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
    // state 
    // components
    const previewTestComponent = () => {
        return (
            <div>
                <h2>{name}</h2>
                <p>Type: {type}</p>
                <span>Group: {group}</span>
            </div>
        )
    }
    const fullTestComponent = () => {
        return (
            <div>
                <h2>{name}</h2>
                <p>Type: {type}</p>
                <span>Group: {group}</span>
                <Form />
            </div>
        )
    }
    // functions
    return (
        <div className={`flex flex-col border-2 p-4 m-4 ${THEME_COLOR_SCHEME[currentTheme].subContainer} rounded-md w-full ${sizes.width.maxWidth}`}>
            {testType === TEST_TYPE.PREVIEW ? previewTestComponent() : fullTestComponent()}
        </div>
    )
}
