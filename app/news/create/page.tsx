import { indents, rounded } from "@/app/globalConsts/globalStyles";
import CreateNews from "@/app/components/news/createNews";

export default function CreateNewsPage() {

    return (
        <div className={`flex flex-col  bg-mainContainer ${rounded.medium} flex-1 ${indents.container.main} gap-2 items-center `}>
            <CreateNews />
        </div>
    )
}
