export const THEME_COLOR_SCHEME = {
	LIGHT: {
		activeElement: 'bg-teal-300',
		container: 'bg-cyan-500',
		element: '',
	},
	DARK: {
		activeElement: 'bg-violet-300',
		container: 'bg-indigo-500',
		element: '',
	},
};

export const indents = {
	text: '',
	title: 'm-2 p-2',
	button: '',
	container: 'm-1 p-2',
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
	high: 'rounded-3xl',
	medium: 'rounded-lg',
	low: 'rounded-sm',
};

export const textBaseStyles = '';
export const buttonBaseStyles = `${indents.container} ${rounded.medium}`;
export const containerBaseStyles = `${indents.container}`;
export const subContainerBaseStyles = '';
export const titleBaseStyles = `text-4xl font-sans ${indents.title} ${textBaseStyles}`;
