import { DISORDER_TYPE } from "@/app/globalConsts/globalEnum";


export const HASH_TAGS = {
    en: {
        hashTags: 'Hash tags',
        availableHashTags: 'Available Hash tags',
        chosenColorHashTag: 'Chosen color',
        addHashTag: 'Add #tag',
        saveHashTag: 'Save #tag',
        deleteHashTag: 'Delete #tag',
        createHashTag: 'Create',
        cancelAddingHashTag: 'Cancel',
        hashTagTypes: [
            {value:DISORDER_TYPE.DEPRESSION, label: 'Depression'},
            {value:DISORDER_TYPE.SHIZOPHRENIA, label: 'Schizophrenia'},
            {value:DISORDER_TYPE.TREVOR, label: 'Trevor'},
            {value:DISORDER_TYPE.AUTISM, label: 'Autism'},
            {value:DISORDER_TYPE.DEMENTIA, label: 'Dementia'},
            {value:DISORDER_TYPE.STRESS, label: 'Stress'},
        ]
    },
    lv: {
        hashTags: 'Hashtagi',
        availableHashTags: 'Pieejamie Hashtagi',
        chosenColorHashTag: 'Izvēlētais krāsas',
        addHashTag: 'Pievienot #tag',
        saveHashTag: 'Saglabāt #tag',
        deleteHashTag: 'Dzēst #tag',
        createHashTag: 'Izveidot',
        cancelAddingHashTag: 'Atcelt',
        hashTagTypes: [
            {value:DISORDER_TYPE.DEPRESSION, label: 'Depresija'},
            {value:DISORDER_TYPE.SHIZOPHRENIA, label: 'Šizofrēnija'},
            {value:DISORDER_TYPE.TREVOR, label: 'Trevor'},
            {value:DISORDER_TYPE.AUTISM, label: 'Autisms'},
            {value:DISORDER_TYPE.DEMENTIA, label: 'Demence'},
            {value:DISORDER_TYPE.STRESS, label: 'Stress'},
        ]
    },
    ru: {
        hashTags: 'Хештеги',
        availableHashTags: 'Доступные хештеги',
        chosenColorHashTag: 'Выбранный цвет',
        addHashTag: 'Добавить #тэг',
        saveHashTag: 'Сохранить #тэг',
        deleteHashTag: 'Удалить #тэг',
        createHashTag: 'Создать',
        cancelAddingHashTag: 'Отмена',
        hashTagTypes: [
            {value:DISORDER_TYPE.DEPRESSION, label: 'Депрессия'},
            {value:DISORDER_TYPE.SHIZOPHRENIA, label: 'Шизофрения'},
            {value:DISORDER_TYPE.TREVOR, label: 'Тревор'},
            {value:DISORDER_TYPE.AUTISM, label: 'Аутизм'},
            {value:DISORDER_TYPE.DEMENTIA, label: 'Деменция'},
            {value:DISORDER_TYPE.STRESS, label: 'Стресс'},
        ]
    }
} as const