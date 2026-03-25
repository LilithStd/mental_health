import CondifdentalityIcon from '@/public/icons/ShieldCheck.svg'
import PersonalizedCareIcon from '@/public/icons/HeartFull.svg'
import AccessiblityIcon from '@/public/icons/DevicePhoneMobile.svg'
import SupportCommunity from '@/public/icons/UserGroup.svg'

export const WelcomeBlockContent = {
    en:{
        TITLE: 'Welcome to mental health',
        TITLE_2:'Already know your problem?',
        TITLE_3:'Need some guidance?',
        SUBTITLE: 'Your journey to better mental well-being starts here',
        DESCRIPTION: 'Discover a supportive community, expert resources, and personalized tools to help you navigate life’s challenges and improve your mental health.',
        SIGN_UP_BUTTON: 'Sign Up for a Consultation',
        TESTS_BUTTON: 'Go to Tests',
        PRIVILEGES_TITLE: 'Our Privileges:',
        PRIVILEGES_LIST: [
            {icon: CondifdentalityIcon, text: 'Confidentiality and Privacy'},
            {icon: PersonalizedCareIcon, text: 'Personalized Care'},
            {icon: AccessiblityIcon, text: 'Access to Resources'},
            {icon: SupportCommunity, text: 'Supportive Community'},
        ]
    },
    lv:{
    TITLE: 'Laipni lūdzam Mental Healths',
    TITLE_2: 'Vai jau zināt savu problēmu?',
    TITLE_3: 'Vai nepieciešama palīdzība?',
    DESCRIPTION: 'Platforma psihiskās veselības atbalstam. Šeit jūs atradīsiet resursus, testus un rakstus, kas palīdzēs labāk izprast sevi un rūpēties par savu psihisko labklājību.',
    SIGN_UP_BUTTON: 'Pieteikties konsultācijai',
    TESTS_BUTTON: 'Pāriet pie testiem',
    PRIVILEGES_TITLE: 'Mūsu privilēģijas:',
    PRIVILEGES_LIST: [
        {icon: CondifdentalityIcon, text: 'Konfidencialitāte un privātums'},
        {icon: PersonalizedCareIcon, text: 'Personalizēta aprūpe'},
        {icon: AccessiblityIcon, text: 'Piekļuve resursiem'},
        {icon: SupportCommunity, text: 'Atbalstoša kopiena'},
    ]
    },
    ru:{
    TITLE: 'Добро пожаловать в Mental Healths',
    TITLE_2: 'Уже знаете свою проблему?',
    TITLE_3: 'Нужна помощь?',
    DESCRIPTION: 'Платформа для поддержки психического здоровья. Здесь вы найдете ресурсы, тесты и статьи, которые помогут вам лучше понять себя и заботиться о своем психическом благополучии.',
    BUTTON_TEXT: 'Начать',
    SIGN_UP_BUTTON: 'Записаться на консультацию',
    TESTS_BUTTON: 'Перейти к тестам',
    PRIVILEGES_TITLE: 'Наши привилегии:',
    PRIVILEGES_LIST: [
        {icon: CondifdentalityIcon, text: 'Конфиденциальность и приватность'},
        {icon: PersonalizedCareIcon, text: 'Персонализированный уход'},
        {icon: AccessiblityIcon, text: 'Доступ к ресурсам'},
        {icon: SupportCommunity, text: 'Поддерживающее сообщество'},
    ]
}
   
} as const;