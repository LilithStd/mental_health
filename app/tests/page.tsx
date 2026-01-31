'use client'

import Search from "../components/shared/search";
import Test from "../components/tests/test";
import { TEST_TYPE } from "../globalConsts/globalEnum";
import { THEME_COLOR_SCHEME, rounded, indents } from "../globalConsts/globalStyles";
import { useGlobalStore } from "../store/globalStore";

export default function Tests() {
    // stores
    const currentTheme = useGlobalStore((state) => state.currentTheme);

    return (
        <div className={`flex flex-col ${THEME_COLOR_SCHEME[currentTheme].container} ${rounded.medium} flex-1 ${indents.container.main} items-center text-center`}>
            {/* <Search /> */}
            <h2>Tests Page</h2>
            <Test id={'1'} type="1212" name="Test Name" group="sdsd" testType={TEST_TYPE.PREVIEW} />
        </div>
    )
}
