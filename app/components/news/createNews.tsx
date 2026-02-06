'use client'

import { rounded, sizes, THEME_COLOR_SCHEME } from "@/app/globalConsts/globalStyles";
import { useGlobalStore } from "@/app/store/globalStore";

export default function CreateNews() {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);
    // state
    // functions
    // handlers
    //
    // components 
    const previewNewsComponent = <div>

    </div>

    return (
        <div className={`flex flex-col mb-4 p-2 w-full  ${rounded.medium} ${THEME_COLOR_SCHEME[currentTheme].subContainer} ${sizes.width.maxWidth} gap-4`}>
            <h2>Create News</h2>
            <form action="">
                <input type="text" placeholder="Title" className="w-full mb-2 p-2 rounded-md border border-gray-300" />
                <textarea placeholder="Content" className="w-full min-h-40 mb-2 p-2 rounded-md border border-gray-300"></textarea>
                <input type="text" placeholder="Link" className="w-full mb-2 p-2 rounded-md border border-gray-300" />
            </form>
            <div className={`flex w-full gap-4 justify-center`}>
                <button className={`p-2 ${THEME_COLOR_SCHEME[currentTheme].buttonContainer} ${rounded.medium} w-1/5`}>Cancel</button>
                <button className={`p-2 ${THEME_COLOR_SCHEME[currentTheme].buttonContainer} ${rounded.medium} w-1/5`}>Create</button>
            </div>

        </div>
    )
}
