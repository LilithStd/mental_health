

export const ConsultationPageContent = {
    en: {
        title: 'Contact Information',
        name: 'Name',
        subject: 'Subject',
        email: 'Email',
        phone: 'Phone',
        date: 'Date',
        message: 'Message',
        buttonText: 'Submit',
    },
    lv: {
        title: 'Kontakti',
        name: 'Vārds',
        subject: 'Tēma',
        email: 'E-pasts',
        phone: 'Telefons',
        date: 'Datums',
        message: 'Ziņa',
        buttonText: 'Iesniegt',
    },
    ru: {
        title: 'Контактная Информация',
        name: 'Имя',
        subject: 'Тема',
        email: 'Электронная почта',
        phone: 'Телефон',   
        date: 'Дата',
        message: 'Сообщение',
        buttonText: 'Отправить',
    }
} as const

export const CONSULTATION_TYPE_CONTENT = {
    MAIN:{
        title:{
            en: 'Main method',
            lv: 'Galvenā metode',
            ru: 'Основной метод'
        },
        description:{
            en: 'You can also sign up for a consultation with me by following this',
            lv: 'Jūs arī varat pierakstīties uz konsultāciju ar mani, sekojot šai ',
            ru: 'Вы так же  можете записаться на консультацию со мной, перейдя по этой '
        },
        linkText:{
            en: 'link',
            lv: 'saipei',
            ru: 'ссылке'
        }
    },
    ADDITIONAL:{
        title:{
            en: 'Additional method',
            lv: 'Papildu metode',
            ru: 'Дополнительный метод'

        },
        description:{
            en: 'You can also contact me by filling out the form below',
            lv: 'Jūs varat sazināties ar mani, aizpildot zemāk esošo formu',
            ru: 'Вы также можете связаться со мной, заполнив форму ниже'
        }
        
    }
} as const

export const LINK_TO_CONSULTATION = "https://medon.lv/arsti/aleksandra-konevnina";