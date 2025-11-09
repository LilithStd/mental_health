import {APP_PATH_ROUTER} from '../globalConsts/globalEnum';

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

export const LINKS = [
	LIST_LINKS.MAIN,
	LIST_LINKS.NEWS,
	LIST_LINKS.TEST,
	LIST_LINKS.CONSULTATION,
];
