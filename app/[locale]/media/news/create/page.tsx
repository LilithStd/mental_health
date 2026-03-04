import CreateNews from "@/app/components/news/createNews";

export default function CreateNewsPage() {

    return (
        <div className={`flex flex-col  bg-mainContainer rounded-large flex-1 indents-main-container gap-2 items-center `}>
            <CreateNews />
        </div>
    )
}
