import { getAllNews } from "@/app/serverActions/newsStorage"
import NewsAllClientComponent from "./newsAllClientComponent"


export default async function NewsServerComponents() {
    const news = await getAllNews()
    return <NewsAllClientComponent initialNews={news} />
}

