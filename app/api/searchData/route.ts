import { SEARCH_REQUEST_TYPE, SEARCH_TYPE } from "@/app/globalConsts/globalEnum";
import { LocaleType } from "@/app/types/types";




export const searchData = async (searchParams: {request:SEARCH_TYPE, type: SEARCH_REQUEST_TYPE, query: string, locale: LocaleType }) => {
    switch (searchParams.request) {
        case SEARCH_TYPE.ARTICLES:
            const { searchRequestArticles } = await import("../../service/articleService");
            return searchRequestArticles({ query: searchParams.query, locale: searchParams.locale });
        case SEARCH_TYPE.NEWS:
            const { searchRequestNews } = await import("../../service/newsService");
            return searchRequestNews({ type: searchParams.type, query: searchParams.query });
        case SEARCH_TYPE.TESTS:
            const { searchRequestTests } = await import("../../service/testsService");
            return searchRequestTests({ type: searchParams.type, query: searchParams.query });
        default:
            throw new Error("Invalid search type");
    }
}