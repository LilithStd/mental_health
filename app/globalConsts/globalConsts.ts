import {LANGUAGE} from './globalEnum';

export const LANGUAGE_APP = [LANGUAGE.EN, LANGUAGE.LV, LANGUAGE.RU];

export const LANGUAGE_LABEL = {
    [LANGUAGE.EN]: 'English',
    [LANGUAGE.LV]: 'Latviešu',
    [LANGUAGE.RU]: 'Русский',
}

export const CROP_CONTAINER_SIZE = {
    SMALL: 100,
    MEDIUM: 400,
    LARGE: 800,
}

export const SOCIAL_MEDIA_LINKS = {
    instagram: 'https://www.instagram.com',
    facebook: 'https://www.facebook.com',
}

export const LINK_RAW_PATH = {
    butterflyBG: 'https://res.cloudinary.com/dm0mozptw/image/upload/v1783618525/componentBackGround_hypa6c.png',
    butterflyBlue: 'https://res.cloudinary.com/dm0mozptw/image/upload/v1783618525/butterflyBlue_gygdwh.png',
    butterflyViolet: 'https://res.cloudinary.com/dm0mozptw/image/upload/v1783618525/butterflyViolet_iahnmk.png',
}

export const  UPLOAD_IMAGE_NAME = {
	bio: {
        photo: 'AleksandraKonevnina-9_1_cmemvb',
    },
    global: {
        mainPage: {
            welcomeBlock: 'mentalHealthWomenSmall_m7rckc',
            aboutConsultation:'helpingAbstract_Big_x9leww',
            tests:{
                butterFlyBlue:'butterflyBlue_gygdwh',
                butterFlyViolet:'butterflyViolet_iahnmk',
                butterFlyBackground:'componentBackGround_hypa6c',
            },
            problemSolvingBlock: {
                brainImage:'brainSegmented_z47azg',
            }
        },
        tests: {
            defaultTestImage:'copy_of_humanbrainabstract_zqjsxc',
            smallTestImage: 'humanBrainAbstractSmall_zqjsxc_wiyqls'
        },
        header: {
            logo:'greenTree_djcngj',
        },
        consultation: {
            consultationPage:'greenTree_djcngj',
        }
        
    }
}