
import Image from "next/image";
import LibraryElement from "@/app/components/library/libraryElement";
import ReturnButton from "@/app/components/returnButton";
import { LINK_RAW_PATH } from "@/app/globalConsts/globalConsts";
import { LIBRARY_TYPE } from "@/app/globalConsts/globalEnum";
import { routes } from "@/app/helpers/helpersFunctions";
import { getLocale } from "@/app/hooks/server/getLocale";
import { getElementLibraryById } from "@/app/service/libraryService";
import { LocaleType } from "@/app/types/types";


export default async function CurrentElementLibraryPage({ params }: { params: { id: string, type: LIBRARY_TYPE } }) {

  const { id, type } = await params;
  const locale = await getLocale() as LocaleType
  const routesAdaptive = routes(locale)
  const libraryElement = await getElementLibraryById(id);

  return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
        <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
            <div className={`flex w-full justify-start mb-4`}>
                <ReturnButton pathToReturn={routesAdaptive.library.root} />
            </div>
            <div className={`flex w-full justify-center gap-4 mb-4`}>
                <LibraryElement slugs={[libraryElement]} id={id} type={type} />
            </div>
            <Image src={LINK_RAW_PATH.butterflyBG} alt="Background Image" fill className="  w-full h-full z-0 object-cover rounded-large opacity-20" />
        </div>
    </div>
  )
}
