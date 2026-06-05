import LibraryElement from "@/app/components/library/libraryElement";
import { LIBRARY_TYPE } from "@/app/globalConsts/globalEnum";

interface GroupPageProps {
  searchParams: Promise<{
    ids?: string[];
  }>;
}

export default async function GroupPage({ searchParams }: GroupPageProps) {
  const { ids = [] } = await searchParams;
  

  return (
    <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
        <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
            <LibraryElement ids={ids} type={LIBRARY_TYPE.GROUP} />
        </div>
    </div>
  )
}
