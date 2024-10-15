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
				'color-bg': colors.slate[900],
				'color-bg-surface-primary': colors.cyan[900],
				'color-bg-surface-secondary': colors.cyan[800],
				'color-bg-fill': colors.cyan[700],
				'color-bg-fill-active': colors.cyan[600],
				'color-bg-fill-hover': colors.cyan[500],
				'color-bg-fill-disabled': colors.cyan[400],
				// Colores para el texto
				'color-text-primary': colors.cyan[50],
				'color-text-secondary': colors.cyan[300],
				'color-text-tertiary': colors.cyan[600],
				'color-text-danger': colors.red[500],
				'color-text-success': colors.green[600],
				'color-text-disabled': colors.cyan[950],
				// Colores para los bordes
				'color-border': colors.cyan[900],
				'color-border-secondary': colors.cyan[700],
				'color-border-tertiary': colors.cyan[500],
				'color-border-danger': colors.red[600],
				'color-border-success': colors.green[800],
				// Colores para los iconos
				'color-icon': colors.cyan[100],
				'color-icon-active': colors.cyan[200],
				'color-icon-hover': colors.cyan[300],
				'color-icon-disabled': colors.cyan[400],
				// Colores para los botones
				'color-btn-primary': colors.cyan[600],
				'color-btn-primary-hover': colors.cyan[500],
				'color-btn-primary-active': colors.cyan[400],
				'color-btn-primary-disabled': colors.cyan[300],
				'color-btn-danger': colors.red[500],
				'color-btn-danger-hover': colors.red[400],
				'color-btn-danger-active': colors.red[300],
				'color-btn-danger-disabled': colors.red[200],
				'color-btn-neutral': colors.slate[500],
				'color-btn-neutral-hover': colors.slate[400],
				'color-btn-tertneutraliary-active': colors.slate[300],
				'color-btn-neutral-disabled': colors.slate[200],
				"color-btn-success": colors.green[600],
				"color-btn-success-hover": colors.green[500],
				"color-btn-success-active": colors.green[400],
				"color-btn-success-disabled": colors.green[300],

			},
		},
	},
	plugins: [require('flowbite/plugin'), flowbite.plugin()],
};
