
import {APP_PATH_ROUTER, AUTHORIZATION_STATUS} from '../globalConsts/globalEnum';
const locale: 'en' | 'lv' | 'ru' = 'en';

export const LIST_LINKS = {
	
	MAIN: {
		label: 'main',
		path: `/${locale}/${APP_PATH_ROUTER.MAIN}`,
		translate: {
			en: 'main',
			lv: 'galvenais',
			ru: 'главная',
		},
	},
	FAQ:{
		label: 'FAQ',
		path: `/${locale}/${APP_PATH_ROUTER.FAQ}`,
		translate: {
			en: 'FAQ',
			lv: 'BUJ',
			ru: 'ЧАВО',
		}
	},
	TESTS: {
		label: 'tests',
		path: `/${locale}/${APP_PATH_ROUTER.TESTS}`,
		translate: {
			en: 'tests',
			lv: 'tests',
			ru: 'тесты',
		},
	},
	MEDIA: {
		label: 'media',
		path: `/${locale}/${APP_PATH_ROUTER.MEDIA}`,
		translate: {
			en: 'media',
			lv: 'mediji',
			ru: 'медиа',
		},
	},
	PRICING: {
		label: 'pricing',
		path: `/${locale}/${APP_PATH_ROUTER.PRICING}`,
		translate: {
			en: 'pricing',
			lv: 'cenas',
			ru: 'цены',
		},
	},

	CONSULTATION: {
		label: 'consultation',
		path: `/${locale}/${APP_PATH_ROUTER.CONSULTATION}`,
		translate: {
			en: 'consultation',
			lv: 'konsultācija',
			ru: 'консультация',
		},
	},
};

export const AUTHORIZATION_TEXT = {
	REGISTRATION: {
		label:AUTHORIZATION_STATUS.REGISTRATION,
		translate: {
			en: 'Registration',
			lv: 'Reģistrācija',
			ru: 'Регистрация',
	},
		},
		
	SIGN_IN: {
		label:AUTHORIZATION_STATUS.SIGN_IN,
		translate: {
			en: 'Sign in',
			lv: 'Pierakstīties',
			ru: 'Войти',
		}
	},
};

export const INPUT_PLACEHOLDERS = {
	EMAIL: {
		en: 'Email',
		lv: 'E-pasts',
		ru: 'Электронная почта',
	},
	PASSWORD: {
		en: 'Password',
		lv: 'Parole',
		ru: 'Пароль',
	},
	REPEAT_PASSWORD: {
		en: 'Repeat Password',
		lv: 'Atkārtot paroli',
		ru: 'Повторите пароль',
	},
	USERNAME: {
		en: 'Username',
		lv: 'Lietotājvārds',
		ru: 'Имя пользователя',
	},
	SUBMIT:{
		en: 'Submit',
		lv: 'Iesniegt',
		ru: 'Отправить',
	},
}

export const AUTH_METHODS_SYSTEM_MESSAGES = {
	ALREADY_REGISTERED: {
		en: {
			part1: 'You are already registered.',
			part2: ' Please, sign in ',
		},
		lv:{
			part1: 'Jūs jau esat reģistrējies.',
			part2: ' Lūdzu, pierakstieties šeit ',
		},
		ru: {
			part1: 'Вы уже зарегистрированы.',
			part2: ' Пожалуйста, войдите ',
		}
	},
	NOT_REGISTERED_YET: {
		en: {
			part1: 'Not registered yet?',
			part2: ' Please, register ',
		},
		lv: {
			part1: 'Vēl neesat reģistrējies?',
			part2: ' Lūdzu, reģistrējieties.',
		},
		ru: {
			part1: 'Ещё не зарегистрированы?',
			part2: ' Пожалуйста, зарегистрируйтесь.',
		},
	},
	PASSWORD_MISMATCH: {
		en: {
			part1: 'Passwords do not match.',
			part2: ' Please, try again.',
		},
		lv: {
			part1: 'Paroles nesakrīt.',
			part2: ' Lūdzu, mēģiniet vēlreiz.',
		},
		ru: {
			part1: 'Пароли не совпадают.',
			part2: ' Пожалуйста, попробуйте снова.',
		},
	},
	HAVE_ACCOUNT_SIGN_IN: {
		en: {
			part1: 'Already have an account?',
			part2: ' Sign in ',
		},
	
		lv: {
			part1: 'Ir konts?',
			part2: ' Pierakstīties ',
		},
		ru: {
			part1: 'Есть аккаунт?',
			part2: ' Войдите ',
		},
	},
	HERE_LINK: {
		en: 'here',
		lv: 'šeit',
		ru: 'здесь',
	},
}

export const ROLE_AUTHORIZED_USER_TRANSLATE = {
	USER: {
		translate: {
			en: 'User',
			lv: 'Lietotājs',
			ru: 'Пользователь',
		},
	},
	ADMIN: {
		translate: {
			en: 'Admin',
			lv: 'Admins',
			ru: 'Админ',
		},
	},
	OTHER: {
		translate: {
			en: 'Other',
			lv: 'Cits',
			ru: 'Другой',
		},
	}
}

export const LINKS = [
	LIST_LINKS.MAIN,
	LIST_LINKS.MEDIA,
	LIST_LINKS.TESTS,
	LIST_LINKS.FAQ,
	LIST_LINKS.PRICING,
	LIST_LINKS.CONSULTATION,
];
