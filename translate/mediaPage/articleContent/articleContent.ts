
export const ArticleContent = {
    en: {
        withoutContent:{
        noTitle: 'no available title in this language',
        noAuthor: 'no available author in this language',
        noContent: 'no available content in this language',
        },
        author: 'author',
        publishedOn: 'Published on',
        updatedOn: 'Updated on',
        
    },
    lv: {
        withoutContent:{
        noTitle: 'nav pieejams nosaukums šajā valodā',
        noAuthor: 'nav pieejams autors šajā valodā',
        noContent: 'nav pieejams saturs šajā valodā',
        },
        author: 'autors',
        publishedOn: 'Publicēts',
        updatedOn: 'Atjaunināts',
    },
    ru: {
        withoutContent:{
        noTitle: 'нет доступного заголовка на этом языке',
        noAuthor: 'нет доступного автора на этом языке',
        noContent: 'нет доступного содержания на этом языке',
        },
        author: 'автор',
        publishedOn: 'Опубликовано',
        updatedOn: 'Обновлено',
    }
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