export const THEME_COLOR_SCHEME = {
	LIGHT: {
		activeElement: 'bg-teal-300',
	},
	DARK: {
		activeElement: 'bg-blue-300',
	},
};

export const indents = {
	text: '',
	title: 'm-2 p-2',
	button: '',
	container: 'm-1 p-1',
	subContainer: '',
};

export const shadow = {
	text: '',
	title: '',
	button: '',
	container: '',
	subContainer: '',
};

export const rounded = {
	high: 'rounded-xl',
	medium: 'rounded-lg',
	low: 'rounded-sm',
};

export const textBaseStyles = '';
export const buttonBaseStyles = `${indents.container} ${rounded.medium}`;
export const containerBaseStyles = `${indents.container}`;
export const subContainerBaseStyles = '';
export const titleBaseStyles = `text-4xl font-sans ${indents.title} ${textBaseStyles}`;
