import CreateArticle from "@/app/components/articles/createArticle";


export default function CreateArticlePage() {
    return (
        <div className={`flex flex-col  bg-mainContainer rounded-large flex-1 p-4 gap-2 items-center `}>
            <CreateArticle />
        </div>
    )
}
