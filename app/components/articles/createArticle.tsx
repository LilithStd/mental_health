'use client'
import { LANGUAGE } from "@/app/globalConsts/globalEnum";
import { routes } from "@/app/helpers/helpersFunctions";
import { useLocale } from "@/app/hooks/useLocale";
import { useGlobalStore } from "@/app/store/globalStore";
import { LOCALES, LocaleType } from "@/app/types/types";
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
    type CreateArticleOption = {
        titleAvailableLanguage: string[],
        contentAvailableLanguage: string[]
        authorAvailableLanguage: string[]
    }
    const [availableLanguage, setAvailableLanguage] = useState<CreateArticleOption>({
        titleAvailableLanguage: [],
        contentAvailableLanguage: [],
        authorAvailableLanguage: []
    })
    const [isChoosedLanguage, setIsChoosedLanguage] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState<LocaleType>(locale)
    const [multiLanguage, setMultiLanguage] = useState(false)
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
    const res = await fetch('/api/articles', {
        method: 'POST',
        body: formData,
    })

    form.reset()
    if (res.ok) {
        router.push(routesAdaptive.articles.root)
    } else {
        alert('Error creating article')
    }
}

return (
        <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-4 p-4 max-content-main-container rounded-large bg-primary-color/30 border border-primary-color/30 w-full`}
        >
            <h1 className="text-xl font-bold">{CreateArticleContent[locale].title}</h1>
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
          <div className="relative flex items-center gap-2">
                    <span>{CreateArticleContent[locale].selectedLanguage}: </span>
                    <button
                        type="button"
                        onClick={() => setIsChoosedLanguage(true)}
                        className="bg-primary-color/50 p-1 font-bold rounded-large"
                    >
                        {selectedLanguage.toUpperCase()}
                    </button>
                    {isChoosedLanguage && (
                        <div className="
                        absolute 
                        -top-5 
                        mt-2 
                        left-35
                        flex 
                        gap-2
                        bg-primary-color/20
                        backdrop-blur-md
                        p-2 rounded-large
                        z-10
                        ">
                        {LOCALES.map((item) => (
                            <button
                            key={item}
                            onClick={() => {
                                setSelectedLanguage(item as LocaleType)
                                setIsChoosedLanguage(false)
                            }}
                            className={`
                                p-1 rounded-large border border-primary-color/30
                                ${selectedLanguage === item ? 'bg-primary-color/50 font-bold' : 'bg-primary-color/30'}
                            `}
                            >
                            {item.toUpperCase()}
                            </button>
                        ))}
                        </div>
                    )}
                </div>
            <div className={`flex flex-col gap-4 md:flex-row`}>
              <input 
                type="text" 
                name="titleEn"
                placeholder={CreateArticleContent[locale].placeholderContent.en.title}
                required
                className={`border border-primary-color/30 p-2 bg-primary-color/30 rounded-large`}
            />
            {multiLanguage && <>
               <input 
                type="text" 
                name="titleLv"
                placeholder={CreateArticleContent[locale].placeholderContent.lv.title}
                required
                className={`border border-primary-color/30 p-2 bg-primary-color/30 rounded-large`}
            />
            <input 
                type="text" 
                name="titleRu"
                placeholder={CreateArticleContent[locale].placeholderContent.ru.title}
                required
                className={`border border-primary-color/30 p-2 bg-primary-color/30 rounded-large`}
            />
            </>
               
            }
            
            </div>
            
            <div className={`flex flex-col gap-4 md:flex-row`}>
            <input
                name="authorEn"
                placeholder={CreateArticleContent[locale].placeholderContent.en.author}
                required
                className={`border border-primary-color/30 p-2 bg-primary-color/30 rounded-large`}
            />
            {multiLanguage && 
                <>
                <input
                    name="authorLv"
                    placeholder={CreateArticleContent[locale].placeholderContent.lv.author}
                    required
                    className={`border border-primary-color/30 p-2 bg-primary-color/30 rounded-large`}
                />
                <input
                    name="authorRu"
                    placeholder={CreateArticleContent[locale].placeholderContent.ru.author}
                    required
                    className={`border border-primary-color/30 p-2 bg-primary-color/30 rounded-large`}
                />
            </>}
            
            </div>
           
            <div>
                
            </div>
            <div className={`flex flex-col gap-4 bg-primary-color/30 border border-primary-color/30 p-2 rounded-large`}>
                <span>{CreateArticleContent[locale].tags}</span>
                <AddTagsIcon className="w-6 h-6" fill={'green'} />
            </div>
           
            {multiLanguage ? (
                <div className={`flex flex-col gap-4`}>
                <textarea
                name="contentEn"
                placeholder={`${CreateArticleContent[locale].placeholderContent.en.content} `}
                // onChange={(event) => setEnContent(event.target.value)}
                required
                className={`border border-primary-color/30 p-2 h-32 bg-primary-color/30 rounded-large`}
                />
                <textarea
                name="contentLv"
                placeholder={`${CreateArticleContent[locale].placeholderContent.lv.content} `}
                // onChange={(event) => setLvContent(event.target.value)}
                required
                className={`border border-primary-color/30 p-2 h-32 bg-primary-color/30 rounded-large`}
                />
                <textarea
                name="contentRu"
                placeholder={`${CreateArticleContent[locale].placeholderContent.ru.content} `}
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