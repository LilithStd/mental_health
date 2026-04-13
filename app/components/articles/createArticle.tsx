'use client'
import { LANGUAGE } from "@/app/globalConsts/globalEnum";
import { routes } from "@/app/helpers/helpersFunctions";
import { useLocale } from "@/app/hooks/useLocale";
import { useGlobalStore } from "@/app/store/globalStore";
import { LocaleType } from "@/app/types/types";
import { CreateArticleContent } from "@/translate/mediaPage/articleContent/articleContent";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AddTagsIcon from "@/public/icons/PlusCircle.svg";

// interface CreateArticleProps {

// }
export default function CreateArticle() {
    const locale = useLocale() as LocaleType
    const routesAdaptive = routes(locale)
    // states
    const [multiLanguage, setMultiLanguage] = useState(false)
    const [ruContent, setRuContent] = useState('')
    const [enContent, setEnContent] = useState('')
    const [lvContent, setLvContent] = useState('')
    //stores
    // consts
    const router = useRouter()
    // handles
    const handleCancel = () => {
        router.push(routesAdaptive.articles.root)
    }
async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    console.log('Form data entries:', Array.from(formData.entries())) // Debugging line to check form data;
    // const res = await fetch('/api/articles', {
    //     method: 'POST',
    //     body: formData,
    // })

    // form.reset()
    // if (res.ok) {
    //     router.push(routesAdaptive.articles.root)
    // } else {
    //     alert('Error creating article')
    // }
}

return (
        <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-4 p-4 max-content-main-container rounded-large bg-primary-color/30 border border-primary-color/30 w-full`}
        >
            <h1 className="text-xl font-bold">{CreateArticleContent[locale].title}</h1>

            <input
                name="title"
                type="text"
                placeholder={CreateArticleContent[locale].titleInput}
                required
                className={`border border-primary-color/30 p-2 bg-primary-color/30 rounded-large`}
            />
            <input 
                type="text" 
                name="titleEn"
                required
                className={`border border-primary-color/30 p-2 bg-primary-color/30 rounded-large`}
            />
            <input 
                type="text" 
                name="titleLv"
                required
                className={`border border-primary-color/30 p-2 bg-primary-color/30 rounded-large`}
            />

            <input
                name="author"
                placeholder={CreateArticleContent[locale].authorInput}
                required
                className={`border border-primary-color/30 p-2 bg-primary-color/30 rounded-large`}
            />
            <div>
                
            </div>
            <div className={`flex flex-col gap-4 bg-primary-color/30 border border-primary-color/30 p-2 rounded-large`}>
                <span>{CreateArticleContent[locale].tags}</span>
                <AddTagsIcon className="w-6 h-6" fill={'green'} />
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
                <span className="">{CreateArticleContent[locale].multiLanguage}</span>
                <div className="relative">
                   <input type="checkbox" className="sr-only peer" checked={multiLanguage} onChange={(event) => setMultiLanguage(event.target.checked)} />

                <div className="
                    w-11 h-6  rounded-full
                    peer-checked:bg-primary-color/50
                    border border-primary-color/30
                    transition
                " />

                <div className="
                    absolute left-1 top-1
                    w-4 h-4 bg-primary-color rounded-full
                    transition
                    peer-checked:translate-x-5
                " />
                </div>

            </label>
            {multiLanguage ? (
                <div className={`flex flex-col gap-4`}>
                <textarea
                name="enContent"
                placeholder={`${CreateArticleContent[locale].placeholderContent.en} `}
                // onChange={(event) => setEnContent(event.target.value)}
                required
                className={`border border-primary-color/30 p-2 h-32 bg-primary-color/30 rounded-large`}
                />
                <textarea
                name="lvContent"
                placeholder={`${CreateArticleContent[locale].placeholderContent.lv} `}
                // onChange={(event) => setLvContent(event.target.value)}
                required
                className={`border border-primary-color/30 p-2 h-32 bg-primary-color/30 rounded-large`}
                />
                <textarea
                name="ruContent"
                placeholder={`${CreateArticleContent[locale].placeholderContent.ru} `}
                // onChange={(event) => setRuContent(event.target.value)}
                required
                className={`border border-primary-color/30 p-2 h-32 bg-primary-color/30 rounded-large`}
                />
                </div>
                
            ): <textarea
                name="content"
                placeholder={`${CreateArticleContent[locale].contentInput}`}
                required
                className={`border border-primary-color/30 p-2 h-32 bg-primary-color/30 rounded-large`}
            />}
            
            <div className={`flex w-full gap-4`}>
                <button type="button" onClick={handleCancel} className={`bg-primary-color/50 py-2 rounded-large flex-1`}>{CreateArticleContent[locale].cancelButton}</button>
                <button
                    type="submit"
                    className={`bg-primary-color/50 py-2 rounded-large flex-1`}
                >
                    {CreateArticleContent[locale].buttonCreate}
                </button>
            </div>
            
        </form>
    )
}