

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

export const CONSULTATION_TYPE = {
    MAIN:{
        title:{
            en: 'Main method',
            lv: 'Galvenā metode',
            ru: 'Основной метод'
        }
    },
    ADDITIONAL:{
        title:{
            en: 'Additional method',
            lv: 'Papildu metode',
            ru: 'Дополнительный метод'

        },
        description:{
            en: 'You can sign up for a consultation with me by following this',
            lv: 'Jūs varat pierakstīties uz konsultāciju ar mani, sekojot šai ',
            ru: 'Вы можете записаться на консультацию со мной, перейдя по этой '
        },
        linkText:{
            en: 'link',
            lv: 'saipei',
            ru: 'ссылке'
        }
    }
} as const

const LINK_TO_CONSULTATION = "https://medon.lv/arsti/aleksandra-konevnina";