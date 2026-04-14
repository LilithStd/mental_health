
export const ArticleContent = {
    en: {
        noTitle: 'no available title in this language',
        noAuthor: 'no available author in this language',
        noContent: 'no available content in this language',
    },
} as const 

export const PlaceHolderLanguageContent = {
    en: { 
        content: 'Content',
        title: 'Title',
        author: 'Author',
        hashTags: '# Hash Tags'
    },
    lv: { 
        content: 'Saturs',
        title: 'Nosaukums',
        author: 'Autors',
        hashTags: '# Hash Tags'
    },
    ru: { 
        content: 'Содержание',
        title: 'Заголовок',
        author: 'Автор',
        hashTags: '# Хэштеги'
    },
} as const

export const CreateArticleContent = {
    en: {
        title: 'Create Article',
        titleInput: 'Title',
        selectedLanguage: 'Selected language',
        authorInput: 'Author',
        contentInput: 'Content',
        descriptionInput: 'Description',
        tags: '# Hash Tags',
        buttonCreate: 'Create',
        multiLanguage: 'Multilanguage',
        placeholderContent:PlaceHolderLanguageContent,
        cancelButton: 'Cancel',
    },
    lv: {
        title: 'Izveidot rakstu',
        titleInput: 'Nosaukums',
        selectedLanguage: 'Izvēlētā valoda',
        contentInput: 'Saturs',
        authorInput: 'Autors',
        descriptionInput: 'Apraksts',
        tags: '# Hash Tags',
        buttonCreate: 'Izveidot',
        multiLanguage: 'Daudzvalodu',
        placeholderContent:PlaceHolderLanguageContent,
        cancelButton: 'Atcelt',
    },
    ru: {
        title: 'Создать статью',
        titleInput: 'Заголовок',
        selectedLanguage: 'Выбранный язык',
        authorInput: 'Автор',
        contentInput: 'Содержание',
        descriptionInput: 'Описание',
        tags: '# Хэштеги',
        placeholderContent:PlaceHolderLanguageContent,
        buttonCreate: 'Создать',
        multiLanguage: 'Многоязычный',
        cancelButton: 'Отмена',
    }
} as const