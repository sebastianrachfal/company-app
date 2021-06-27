module.exports = {
	mode: 'jit',
	theme: {
		extend: {
			screens: {
				xs: '480px',
			},
		},
	},

	variants: {},
	plugins: [],
	purge: {
		content: [
			'./src/**/*.html',
			'./src/**/*.js',
			'./src/**/*.jsx',
			'./src/**/*.ts',
			'./src/**/*.tsx',
			'./public/index.html',
		],
	},
};
