
import Image from "next/image";
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import Loading from "@/app/components/shared/loading";
import Test from "@/app/components/tests/test";
import { IMAGES_UPLOAD_PATH, SIZE_ELEMENT, TEST_TYPE } from "@/app/globalConsts/globalEnum";

import { getAllTests } from "@/app/service/testsService";
import AppImage from "@/app/components/shared/appImage";
import { LINK_RAW_PATH, UPLOAD_IMAGE_NAME } from "@/app/globalConsts/globalConsts";

const testDefaultImage = UPLOAD_IMAGE_NAME.global.tests.smallTestImage;


export default async function Tests() {
    const tests = await getAllTests();
    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
            {/* <Search /> */}
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
                <div className={`grid grid-cols-1 md:grid-cols-1  mb-4 max-content-main-container`}>
                    
                    {tests ? tests.map((test) => (
                        <div key={test.id} className={`flex border border-primary-color/30 rounded-large bg-primary-color/10  gap-4 mb-4`}>
                            <AppImage type={IMAGES_UPLOAD_PATH.GLOBAL} imageName={testDefaultImage} width={240} height={200} />    
                            <Test  test={test} testType={SIZE_ELEMENT.SMALL} />
                        </div>
                        
                    )) : <Loading />}
                     
                </div>
               <Image src={LINK_RAW_PATH.butterflyBG} alt="Background Image" fill className="  w-full h-full z-0 object-cover rounded-large opacity-20" />
            </div>

        </div>
    )
}
