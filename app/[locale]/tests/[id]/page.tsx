
import Test from "@/app/components/tests/test";
import { SIZE_ELEMENT, TEST_TYPE } from "@/app/globalConsts/globalEnum";


import Loading from "@/app/components/shared/loading";
import { routes } from "@/app/helpers/helpersFunctions";

import { LocaleType, TestType } from "@/app/types/types";
import ReturnButton from "@/app/components/returnButton";
import { getLocale } from "@/app/hooks/server/getLocale";
import { getTestById } from "@/app/service/testsService";


export default async function TestCurrent({
    params,
}: {
    params: { id: string }
}) {
    const { id } = await params
    const locale  = await getLocale() as LocaleType;
    const routesAdaptive = routes(locale)
    const test = await getTestById(id)
    return (
        <div className={`flex flex-col indents-main-container rounded-large flex-1 items-center`}>
            <div className={`flex flex-col flex-1  max-w-6xl  rounded-large bg-primary-color/20 border border-primary-color/20 shadow-md  p-4`}>
            <div className={`flex w-full justify-start mb-4 z-10`}>
                <ReturnButton pathToReturn={routesAdaptive.tests.root} />
            </div>
                
                <Test test={test} testType={SIZE_ELEMENT.FULL} />
            </div>


        </div>
    )
}
