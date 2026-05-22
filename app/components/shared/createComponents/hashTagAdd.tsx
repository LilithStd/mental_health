'use client'
import { useLocale } from "@/app/hooks/useLocale";
import { LocaleType } from "@/app/types/types";
import AddTagsIcon from "@/public/icons/PlusCircle.svg";
import { CreateArticleContent } from "@/translate/mediaPage/articleContent/articleContent";
import { useState } from "react";
import ModalWindowMain from "../../modalWindowMain";
import ModalWindowHashTags from "../../modalWindows/modalWindowHashTags";

export default  function HashTagAdd() {
    const locale =  useLocale() as LocaleType;
    const [isOpenModal, setIsOpenModal] = useState(false);
    const handleCloseModal = () => {
        setIsOpenModal(false);
    }
    return (
        <div className={`flex w-full h-full flex-col gap-4 bg-primary-color/30 border border-primary-color/30 p-2 rounded-large`}>
            <span>{CreateArticleContent[locale].tags}</span>
            <AddTagsIcon className={`w-6 h-6 cursor-pointer hover:scale-110 transition-transform`} fill={'green'} onClick={() => setIsOpenModal(!isOpenModal)} />
            {isOpenModal && <ModalWindowHashTags />}
                
        </div>
  )
}
