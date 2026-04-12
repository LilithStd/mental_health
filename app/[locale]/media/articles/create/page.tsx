import CreateArticle from "@/app/components/articles/createArticle";


export default function CreateArticlePage() {
    return (
        <div className={`flex flex-col indents-main-container rounded-medium flex-1 items-center`}>
                    <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-primary-color/20 border border-primary-color/30 p-4 shadow-md`}>
                       
                        <CreateArticle />
                    </div>
                </div>
    )
}
