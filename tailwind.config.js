/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite-react/tailwind';
import colors from 'tailwindcss/colors';

export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/flowbite/**/*.js',
		flowbite.content(),
	],
	theme: {
		extend: {
			backgroundImage: {
				'custom-gradient':
					'linear-gradient(to top right, ' +
					colors.slate[950] +
					', ' +
					colors.slate[800] +
					')',
			},
			colors: {
				// Colores para los fondos
				bg: {
					DEFAULT: colors.slate[900],
					surface: {
						primary: colors.cyan[900],
						secondary: colors.cyan[800],
					},
					fill: {
						DEFAULT: colors.cyan[700],
						active: colors.cyan[600],
						hover: colors.cyan[500],
						disabled: colors.cyan[400],
					},
				},

				// Colores para los textos
				text: {
					primary: colors.cyan[50],
					secondary: colors.cyan[300],
					tertiary: colors.cyan[600],
					danger: colors.red[500],
					success: colors.green[600],
					disabled: colors.cyan[950],
				},

				// Colores para los bordes
				border: {
					DEFAULT: colors.cyan[900],
					secondary: colors.cyan[700],
					tertiary: colors.cyan[500],
					danger: colors.red[600],
					success: colors.green[800],
				},

				// Colores para los iconos
				icon: {
					DEFAULT: colors.cyan[100],
					active: colors.cyan[200],
					hover: colors.cyan[300],
					disabled: colors.cyan[400],
				},

				// Colores para los botones
				btn: {
					primary: {
						DEFAULT: colors.cyan[600],
						hover: colors.cyan[500],
						active: colors.cyan[400],
						disabled: colors.cyan[300],
					},
					danger: {
						DEFAULT: colors.red[500],
						hover: colors.red[400],
						active: colors.red[300],
						disabled: colors.red[200],
					},
					neutral: {
						DEFAULT: colors.slate[500],
						hover: colors.slate[400],
						active: colors.slate[300],
						disabled: colors.slate[200],
					},
					success: {
						DEFAULT: colors.green[600],
						hover: colors.green[500],
						active: colors.green[400],
						disabled: colors.green[300],
					},
				},
			},
		},
	},
	plugins: [require('flowbite/plugin'), flowbite.plugin()],
};
