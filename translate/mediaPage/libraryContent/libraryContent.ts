import { GROUP_TYPE_LIBRARY } from "@/app/globalConsts/globalEnum"

export const LibraryContent = {
    en:{
        title:'Library',
        type: 'Type',
        createElement:{
            title: 'Title',
    
            description: 'Description',
            content: 'Content',
            hashTags: 'Hash tags',
            image: 'Image',
            saveButton: 'Save',
            cancelButton: 'Cancel',
        }
    },
    lv:{
        title:'Bibliotēka',
        type: 'Tips',
        createElement:{
            title: 'Nosaukums',
    
            description: 'Apraksts',
            content: 'Saturs',
            hashTags: 'Hashtagi',
            image: 'Attēls',
            saveButton: 'Saglabāt',
            cancelButton: 'Atcelt',
        }
    },
    ru:{
        title:'Библиотека',
        type: 'Тип',
        createElement:{
            title: 'Название',
    
            description: 'Описание',
            content: 'Содержание',
            hashTags: 'Хештеги',
            image: 'Изображение',
            saveButton: 'Сохранить',
            cancelButton: 'Отмена',
        }
    }
}

export const LibraryGroupElementType = [
    {
        type: GROUP_TYPE_LIBRARY.ALL,
        en: 'All',
        lv: 'Visi',
        ru: 'Все',
    },
]