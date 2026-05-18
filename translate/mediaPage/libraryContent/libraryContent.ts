import { GROUP_TYPE_LIBRARY } from "@/app/globalConsts/globalEnum"

export const LibraryContent = {
    en:{
        title:'Library',
    },
    lv:{
        title:'Bibliotēka',
    },
    ru:{
        title:'Библиотека',
    }
}

export const LibraryGroupElementType = {
    en:{
        type:GROUP_TYPE_LIBRARY.ALL,
        all:'All',
    },
    lv:{
        type:GROUP_TYPE_LIBRARY.ALL,
        all:'Visi',
    },
    ru:{
        type:GROUP_TYPE_LIBRARY.ALL,
        all:'Все',
    }
} as const