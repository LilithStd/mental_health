import {APP_PATH_ROUTER, AUTHORIZATION_STATUS} from '../globalConsts/globalEnum';

export const LIST_LINKS = {
	MAIN: {
		label: 'main',
		path: APP_PATH_ROUTER.MAIN,
		translate: {
			EN: 'main',
			LV: 'galvenais',
			RU: 'главная',
		},
	},
	NEWS: {
		label: 'news',
		path: APP_PATH_ROUTER.NEWS,
		translate: {
			EN: 'news',
			LV: 'ziņas',
			RU: 'новости',
		},
	},
	TEST: {
		label: 'tests',
		path: APP_PATH_ROUTER.TEST,
		translate: {
			EN: 'test',
			LV: 'tests',
			RU: 'тест',
		},
	},
	CONSULTATION: {
		label: 'consultation',
		path: APP_PATH_ROUTER.CONSULTATION,
		translate: {
			EN: 'consultation',
			LV: 'konsultācija',
			RU: 'консультация',
		},
	},
};

export const AUTHORIZATION_TEXT = {
	REGISTRATION: {
		label:AUTHORIZATION_STATUS.REGISTRATION,
		translate: {
			EN: 'Registration',
			LV: 'Reģistrācija',
			RU: 'Регистрация',
	},
		},
		
	SIGN_IN: {
		label:AUTHORIZATION_STATUS.SIGN_IN,
		translate: {
			EN: 'Sign in',
			LV: 'Pierakstīties',
			RU: 'Войти',
		}
	},
};

export const INPUT_PLACEHOLDERS = {
	EMAIL: {
		EN: 'Email',
		LV: 'E-pasts',
		RU: 'Электронная почта',
	},
	PASSWORD: {
		EN: 'Password',
		LV: 'Parole',
		RU: 'Пароль',
	},
	REPEAT_PASSWORD: {
		EN: 'Repeat Password',
		LV: 'Atkārtot paroli',
		RU: 'Повторите пароль',
	},
	USERNAME: {
		EN: 'Username',
		LV: 'Lietotājvārds',
		RU: 'Имя пользователя',
	},
	SUBMIT:{
		EN: 'Submit',
		LV: 'Iesniegt',
		RU: 'Отправить',
	}

}

export const LINKS = [
	LIST_LINKS.MAIN,
	LIST_LINKS.NEWS,
	LIST_LINKS.TEST,
	LIST_LINKS.CONSULTATION,
];
