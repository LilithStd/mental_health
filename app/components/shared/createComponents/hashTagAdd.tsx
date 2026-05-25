'use client'
import { useLocale } from "@/app/hooks/useLocale";
import { HashTagType, LocaleType } from "@/app/types/types";
import AddTagsIcon from "@/public/icons/PlusCircle.svg";
import { CreateArticleContent } from "@/translate/mediaPage/articleContent/articleContent";
import { useState } from "react";
import ModalWindowMain from "../../modalWindowMain";
import ModalWindowHashTags from "../../modalWindows/modalWindowHashTags";
import HashTags from "../hashTags";
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum";

export default  function HashTagAdd() {
    const locale =  useLocale() as LocaleType;
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [hashTags, setHashTags] = useState<HashTagType[]>([]);
    const handleCloseModal = () => {
        setIsOpenModal(false);
    }
    const addHashTagsHandler = (hashTags: HashTagType[]) => {

        // setHashTags((prev) => [...prev, ...hashTags]);
        setHashTags(hashTags);
        setIsOpenModal(false);
    }
    return (
        <div className={`relative flex w-full h-full flex-col gap-4 bg-primary-color/20 border border-primary-color/30 p-2 rounded-large`}>
            <span>{CreateArticleContent[locale].tags}</span>
            {hashTags.length > 0 ? <HashTags hashTags={hashTags.map(tag => tag.title[locale])} type={SIZE_ELEMENT.FULL} /> : <span className={`text-sm`}>{'nothings'}</span>}
            <AddTagsIcon className={`w-6 h-6 cursor-pointer hover:scale-110 transition-transform`} fill={'green'} onClick={() => setIsOpenModal(!isOpenModal)} />
            {isOpenModal && <ModalWindowHashTags hashTagsCallBack={addHashTagsHandler} />}
                
        </div>
  )
}
