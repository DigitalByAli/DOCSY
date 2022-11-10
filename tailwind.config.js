/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	content: [
		'../DOCSY/src/ui/**/*.{vue,js,ts,jsx,tsx,md}',
		'../SRC/public/src/Components/Base/**/*.{vue,js,ts,jsx,tsx}',
	],
	safelist: ['html', 'body'],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
};
