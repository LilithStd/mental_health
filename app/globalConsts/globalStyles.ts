export const THEME_COLOR_SCHEME = {
	LIGHT: {
		background: 'bg-white',
		text: 'text-black',
		activeElement: 'bg-teal-300',
		container: 'bg-cyan-500',
		element: '',
		hover: 'hover:bg-gray-200',
	},
	DARK: {
		background: 'bg-gray-900',
		text: 'text-white',
		activeElement: 'bg-violet-300',
		container: 'bg-indigo-500',
		element: '',
		hover: 'hover:bg-amber-700',
	},
};

export const indents = {
	text: '',
	title: 'm-2 p-2',
	button: '',
	container:{
		main:'m-4 p-2',
		sub:'m-2 p-1'
	} 
	
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

export const font = {
	title: {
		size: {
			large: 'text-5xl',
			medium: 'text-2xl',
			small: 'text-xl',
		},
	},
	text: {
		size: {
			large: 'text-2xl',
			medium: 'text-lg',
			small: 'text-base',
		},
	},
};

export const screenSizes = {
	mobile: 'max-w-md',
	tablet: 'max-w-lg',
	desktop: 'max-w-4xl',
};

export const textBaseStyles = '';
export const buttonBaseStyles = `${indents.container} ${rounded.medium}`;
export const containerBaseStyles = `${indents.container}`;
export const subContainerBaseStyles = '';
export const titleBaseStyles = `text-4xl font-sans ${indents.title} ${textBaseStyles}`;
