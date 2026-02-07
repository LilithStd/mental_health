import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {LANGUAGE, THEME} from '../globalConsts/globalEnum';

interface GlobalStoreInterface {
	currentLanguage: LANGUAGE;
	currentTheme: THEME;
	setCurrentLanguage: (language: LANGUAGE) => void;
	setCurrentTheme: (theme: THEME) => void;
}

export const useGlobalStore = create<GlobalStoreInterface>()(
	persist(
		(set, get) => ({
			currentLanguage: LANGUAGE.EN,
			currentTheme: THEME.LIGHT,
			setCurrentLanguage: (language) => {
				if (language === get().currentLanguage) return;
				set({
					currentLanguage: language,
				});
			},
			setCurrentTheme: (theme) => {
				if (theme === get().currentTheme) return;
				set({
					currentTheme: theme,
				});
			},
		}),
		{name: 'global-store'}, 
	),
);
