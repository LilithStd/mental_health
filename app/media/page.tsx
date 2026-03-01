import Link from "next/link";
import { routes } from "../helpers/helpersFunctions";


export default function MediaPage() {
    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
            <div className={`flex w-full flex-col flex-1 max-w-6xl  rounded-large bg-mainContainer p-4 `}>
                <h2>Media Page</h2>
                <Link href={routes.news.root} className={`text-blue-500 underline`}>News</Link>
                <Link href={routes.articles.root} className={`text-blue-500 underline`}>Articles</Link>
            </div>
        </div>
    )
}
