import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ArticleType } from "../types/types";

interface ArticlesStoreInterface {
    articles: ArticleType[]
}

export const useGlobalStore = create<ArticlesStoreInterface>()(
    persist(
        (set, get) => ({
            articles: [],
            getAllArticles: () => {
                return get().articles
            },
            getArticleById: (id: string) => {
                return get().articles.find(article => article.id === Number(id))
            },
            postNewArticle: (article: ArticleType) => {}
        }),
        {name: 'articles-store'}, 
    ),
);