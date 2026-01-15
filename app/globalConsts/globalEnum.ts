export enum LANGUAGE {
	EN = 'EN',
	LV = 'LV',
	RU = 'RU',
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

export enum ROLE_AUTH_USER_PRIVILEGE {
	ALL = 'ALL',
	READ_ONLY = 'READ_ONLY',
	ADD_CONTENT = 'ADD_CONTENT',
	DELETE_CONTENT = 'DELETE_CONTENT',
	EDIT_CONTENT = 'EDIT_CONTENT',

}

export enum APP_PATH_ROUTER {
	MAIN = '/',
	NEWS = '/news',
	TEST = '/test',
	ARTICLES = '/articles',
	CONSULTATION = '/consultation',
	USERS = '/users',
	AUTHORIZATION = '/authorization',
}
