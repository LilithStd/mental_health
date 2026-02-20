import Loading from "../shared/loading"
import { NewsType } from "./news"

interface NewsClientComponentProps {
    initialNews: NewsType[]
}
export default function NewsAllClientComponent({ initialNews }: NewsClientComponentProps) {
    const news = initialNews


    return (
        <div className={`flex flex-col indents-main-container  flex-1 items-center`}>
            {/* <Search /> */}
            {loading ? <Loading fullScreen={true} /> : (
                <div className={`flex  gap-4 p-4 flex-col flex-1 max-w-6xl items-center  rounded-large bg-mainContainer `}>

                    {userPrivilege && (
                        <button className={`bg-buttonContainer w-fit flex p-2 justify-center items-center rounded-large`} onClick={() => router.push(routes.news.create())}>
                            Create News
                        </button>
                    )}
                    {isCreateArticleVisible && <CreateNews />}

                    {news.map((newsItem) => (
                        <News key={newsItem.id} news={newsItem} typeNews={NEWS_TYPE.MEDIUM} />
                    ))}
                </div>
            )}
        </div>
    )

}
