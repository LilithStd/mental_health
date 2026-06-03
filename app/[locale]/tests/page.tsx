
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import Loading from "@/app/components/shared/loading";
import Test from "@/app/components/tests/test";
import { SIZE_ELEMENT, TEST_TYPE } from "@/app/globalConsts/globalEnum";

import { getAllTests } from "@/app/service/testSerive";


export default async function Tests() {
    const tests = await getAllTests();
    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
            {/* <Search /> */}
            <div className={`flex flex-col flex-1 max-w-6xl border border-primary-color/30 rounded-large bg-primary-color/20 p-4 shadow-lg w-full`}>
                <div className={`grid grid-cols-1 md:grid-cols-1  mb-4 max-content-main-container`}>
                    {tests ? tests.map((test) => (
                        <Test key={test.id} test={test} testType={SIZE_ELEMENT.SMALL} />
                    )) : <Loading />}
                </div>

            </div>

        </div>
    )
}
