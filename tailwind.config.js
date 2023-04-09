module.exports = {
	purge: ['./src/**/*.js', './src/**/*.jsx'],
	darkMode: false, // Change this back to 'class' when you want to add dark mode
	theme: {
		extend: {
			fontFamily: {
				sans: ['Ubuntu'],
			},
			backgroundColor: (theme) => ({
				...theme('colors'),
				primary: '#2D3748',
				secondary: '#1A202C',
			}),
			textColor: {
				primary: '#E2E8F0',
				secondary: '#E6F1FF',
				accent: '#4299E1',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
