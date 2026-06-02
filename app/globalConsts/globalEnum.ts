export enum LANGUAGE {
	EN = 'en',
	LV = 'lv',
	RU = 'ru',
}

export enum THEME {
	DARK = 'DARK',
	LIGHT = 'LIGHT',
}

export enum AUTHORIZATION_STATUS {
	REGISTRATION = 'REGISTRATION',
	SIGN_IN = 'SIGN_IN',
}

export enum ROLE_AUTHORIZED_USER {
	USER = 'USER',
	ADMIN = 'ADMIN',
	OTHER = 'OTHER',
}

export enum GROUP_TYPE_LIBRARY {
	ALL = 'ALL',
	
}

export enum DISORDER_TYPE {
	DEPRESSION = 'DEPRESSION',
	SHIZOPHRENIA = 'SHIZOPHRENIA',
	TREVOR = 'TREVOR',
	AUTISM = 'AUTISM',
	DEMENTIA = 'DEMENTIA',
	STRESS = 'STRESS',
}

export enum LABEL_TEST_TYPE {
	DEPRESSION = 'DEPRESSION',
	SHIZOPHRENIA = 'SHIZOPHRENIA',
	TREVOR = 'TREVOR',
	AUTISM = 'AUTISM',
	DEMENTIA = 'DEMENTIA',
	STRESS = 'STRESS',
}

export enum ROLE_AUTH_USER_PRIVILEGE {
	ALL = 'ALL',
	READ_ONLY = 'READ_ONLY',
	ADD_CONTENT = 'ADD_CONTENT',
	DELETE_CONTENT = 'DELETE_CONTENT',
	EDIT_CONTENT = 'EDIT_CONTENT',

}

export enum SIZE_ELEMENT {
	SMALL = 'SMALL',
	MEDIUM = 'MEDIUM',
	FULL = 'FULL',
}

// export enum ARTICLE_TYPE {
// 	PREVIEW = 'PREVIEW',
// 	FULL = 'FULL',
// }

export enum USER_FAVORITES_TYPE {
	ARTICLES = 'ARTICLES',
	TESTS = 'TESTS',
	NEWS = 'NEWS',
}

export enum TEST_TYPE {
	PREVIEW = 'PREVIEW',
	FULL = 'FULL',
}

export enum CONSULTATION_TYPE {
	MAIN = 'MAIN',
	ADDITIONAL = 'ADDITIONAL',
}

export enum ADDITIONAL_METHOD_TYPE {
	MAIL = 'MAIL',
	PHONE = 'PHONE',
	MESSENGER = 'MESSENGER',
}

// export enum NEWS_TYPE {
// 	PREVIEW = 'PREVIEW',
// 	MEDIUM = 'MEDIUM',
// 	FULL = 'FULL',
// }

export enum USER_FAVORITES_ACTION {
	ADD = 'ADD',
	REMOVE = 'REMOVE',
}

export enum UPDATE_USER_DATA_TYPE {
	NAME = 'NAME',
	PASSWORD = 'PASSWORD',
	FAVORITES = 'FAVORITES',
}

export enum  MAIN_APP_IMAGE_ROUTES {
	MENTAL_HEALTH = 'mental_health',
}

export enum IMAGES_UPLOAD_PATH {
	GLOBAL =  'global',
	ARTICLE = 'articles',
	NEWS = 'news',
	USER = 'user',
}



export enum APP_PATH_ROUTER {
	MAIN = '/',
	NEWS = '/news',
	MEDIA = '/media',
	TESTS = '/tests',
	LIBRARY = '/library',
	ARTICLES = '/articles',
	CONSULTATION = '/consultation',
	FAQ = '/faq',
	// PRICING = '/pricing',
	USERS = '/user',
	AUTHORIZATION = '/authorization',
}

export enum APP_PATH_ROUTER_SUBPATH {
	ARTICLES = '/articles',
	NEWS = '/news',
	LIBRARY = '/library',
}
