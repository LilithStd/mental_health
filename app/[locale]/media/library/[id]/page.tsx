import ReturnButton from "@/app/components/returnButton";
import { routes } from "@/app/helpers/helpersFunctions";
import { getLocale } from "@/app/hooks/server/getLocale";
import { LocaleType } from "@/app/types/types";


export default async function CurrentElementLibraryPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const locale = await getLocale() as LocaleType
  const routesAdaptive = routes(locale)
  console.log('CurrentElementLibraryPage id:', id);
  return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
        <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
            <div className={`flex w-full justify-start mb-4`}>
                <ReturnButton pathToReturn={routesAdaptive.library.root} />
            </div>
            <div className={`flex w-full justify-center gap-4 mb-4`}>
                <span>{`${id}`}</span>
            </div>
        </div>
    </div>
  )
}
