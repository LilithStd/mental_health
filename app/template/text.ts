import {APP_PATH_ROUTER, AUTHORIZATION_STATUS, ROLE_AUTHORIZED_USER} from '../globalConsts/globalEnum';

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
	},
}

export const AUTH_METHODS_SYSTEM_MESSAGES = {
	ALREADY_REGISTERED: {
		EN: {
			part1: 'You are already registered.',
			part2: ' Please, sign in ',
		},
		LV:{
			part1: 'Jūs jau esat reģistrējies.',
			part2: ' Lūdzu, pierakstieties šeit ',
		},
		RU: {
			part1: 'Вы уже зарегистрированы.',
			part2: ' Пожалуйста, войдите ',
		}
	},
	NOT_REGISTERED_YET: {
		EN: {
			part1: 'Not registered yet?',
			part2: ' Please, register ',
		},
		LV: {
			part1: 'Vēl neesat reģistrējies?',
			part2: ' Lūdzu, reģistrējieties.',
		},
		RU: {
			part1: 'Ещё не зарегистрированы?',
			part2: ' Пожалуйста, зарегистрируйтесь.',
		},
	},
	PASSWORD_MISMATCH: {
		EN: {
			part1: 'Passwords do not match.',
			part2: ' Please, try again.',
		},
		LV: {
			part1: 'Paroles nesakrīt.',
			part2: ' Lūdzu, mēģiniet vēlreiz.',
		},
		RU: {
			part1: 'Пароли не совпадают.',
			part2: ' Пожалуйста, попробуйте снова.',
		},
	},
	HAVE_ACCOUNT_SIGN_IN: {
		EN: {
			part1: 'Already have an account?',
			part2: ' Sign in ',
		},
	
		LV: {
			part1: 'Ir konts?',
			part2: ' Pierakstīties ',
		},
		RU: {
			part1: 'Есть аккаунт?',
			part2: ' Войдите ',
		},
	},
	HERE_LINK: {
		EN: 'here',
		LV: 'šeit',
		RU: 'здесь',
	},
}

export const ROLE_AUTHORIZED_USER_TRANSLATE = {
	USER: {
		LABLE:ROLE_AUTHORIZED_USER.USER,
		translate: {
			EN: 'User',
			LV: 'Lietotājs',
			RU: 'Пользователь',
		},
	},
	ADMIN: {
		LABLE:ROLE_AUTHORIZED_USER.ADMIN,
		translate: {
			EN: 'Admin',
			LV: 'Admins',
			RU: 'Админ',
		},
	},
	OTHER: {
		LABLE:ROLE_AUTHORIZED_USER.OTHER,
		translate: {
			EN: 'Other',
			LV: 'Cits',
			RU: 'Другой',
		},
	}
}

export const LINKS = [
	LIST_LINKS.MAIN,
	LIST_LINKS.NEWS,
	LIST_LINKS.TEST,
	LIST_LINKS.CONSULTATION,
];
