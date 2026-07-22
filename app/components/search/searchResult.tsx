

export default function SearchResult() {
  return (
    <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
      <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 shadow-lg backdrop-blur-md border border-primary-color/30 p-4`}>
        <div className={`flex justify-start items-center w-full flex-col flex-1 gap-4`}>
          <h2 className={` justify-center text-center font-bold`}>{`Search results for ""`}</h2>
        </div>
      </div>  
    </div>
  )
}
