import { GROUP_TYPE_LIBRARY } from "@/app/globalConsts/globalEnum"

export const LibraryContent = {
    en:{
        title:'Library',
        type: 'Type',
        createElement:{
            title: 'Title',
            indentification: 'Identification',
            slug: 'Slug',
            slugExample: 'Example: "depression"',
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
            indentification: 'Identifikācija',
            slug: 'Identifikators',
            slugExample: 'Piemērs: "depresija"',
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
            indentification: 'Идентификация',
            slug: 'Идентификатор термина',
            slugExample: 'Пример: "депрессия"',
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