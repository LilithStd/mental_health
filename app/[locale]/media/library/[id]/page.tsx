

export default async function CurrentElementLibraryPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  console.log('CurrentElementLibraryPage id:', id);
  return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
        <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
        </div>
    </div>
  )
}
