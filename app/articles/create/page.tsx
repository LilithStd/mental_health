import CreateArticle from "@/app/components/articles/createArticle";
import { THEME_COLOR_SCHEME, rounded, indents } from "@/app/globalConsts/globalStyles";

export default function CreateArticlePage() {
    return (
        <div className={`flex flex-col  bg-mainContainer ${rounded.medium} flex-1 ${indents.container.main} gap-2 items-center `}>
            <CreateArticle />
        </div>
    )
}
