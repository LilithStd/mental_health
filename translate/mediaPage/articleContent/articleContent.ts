export const PlaceHolderLanguageContent = {
    en: 'English content',
    lv: 'Latviešu saturs',
    ru: 'Русский контент'
} as const

export const CreateArticleContent = {
    en: {
        title: 'Create Article',
        titleInput: 'Title',
        authorInput: 'Author',
        contentInput: 'Content',
        descriptionInput: 'Description',
        tags: 'Hash Tags',
        buttonCreate: 'Create',
        multiLanguage: 'Multilanguage',
        placeholderContent:PlaceHolderLanguageContent,
        cancelButton: 'Cancel',
    },
    lv: {
        title: 'Izveidot rakstu',
        titleInput: 'Nosaukums',
        contentInput: 'Saturs',
        authorInput: 'Autors',
        descriptionInput: 'Apraksts',
        tags: 'Hash Tags',
        buttonCreate: 'Izveidot',
        multiLanguage: 'Daudzvalodu',
        placeholderContent:PlaceHolderLanguageContent,
        cancelButton: 'Atcelt',
    },
    ru: {
        title: 'Создать статью',
        titleInput: 'Заголовок',
        authorInput: 'Автор',
        contentInput: 'Содержание',
        descriptionInput: 'Описание',
        tags: 'Хэштеги',
        placeholderContent:PlaceHolderLanguageContent,
        buttonCreate: 'Создать',
        multiLanguage: 'Многоязычный',
        cancelButton: 'Отмена',
    }
} as const