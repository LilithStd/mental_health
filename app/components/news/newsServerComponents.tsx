import { getAllNews } from "@/app/service/newsService"
import NewsAllClientComponent from "./newsAllClientComponent"


export default async function NewsServerComponents() {
    const news = await getAllNews()
    return <NewsAllClientComponent initialNews={news} />
}

