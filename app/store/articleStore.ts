import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ArticleType } from "../types/types";

interface ArticlesStoreInterface {
    articles: ArticleType[]
    createArticle: (article: Omit<ArticleType, "id" | "createdAt">) => Promise<ArticleType | null>;
    loading: boolean;
    error: string | null;
}

export const useArticleStore = create<ArticlesStoreInterface>()(
    persist(
        (set, get) => ({
            articles: [],
            loading: false,
            error: null,
            setAllArticles: (articles: ArticleType[]) => {

                set({ articles })
            },
            getAllArticles: () => {
                return get().articles
            },
            getArticleById: (id: string) => {
                return get().articles.find(article => article.id === Number(id))
            },
            createArticle: async (articleData: Omit<ArticleType, "id" | "createdAt">) => {
                set({ loading: true, error: null });
                try {
                    const res = await fetch("/api/articles", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(articleData),
                    });

                    if (!res.ok) {
                        const errorData = await res.json();
                        throw new Error(errorData.message || "Error creating article");
                    }

                    const data = await res.json();
                    return data as ArticleType;
                    } catch (err: unknown) {
                        const errorMessage = err instanceof Error ? err.message : "Unknown error";
                        console.error("Zustand createArticle error:", err);
                        set({ error: errorMessage });
                        return null;
                        } finally {
                        set({ loading: false });
                        }
            },
            deleteArticleById: (_id: string) => {},
        }),
        {name: 'articles-store'}, 
    ),
);