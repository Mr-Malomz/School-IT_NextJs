module.exports = {
	plugins: [
		'tailwindcss',
		'postcss-import',
		'autoprefixer',
		process.env.NODE_ENV === 'production'
			? [
					'@fullhuman/postcss-purgecss',
					{
						content: [
							'./pages/**/*.{js,jsx,ts,tsx}',
							'./components/**/*.{js,jsx,ts,tsx}',
						],
						defaultExtractor: (content) =>
							content.match(/[\w-/:]+(?<!:)/g) || [],
					},
			  ]
			: undefined,
	],
	// plugins: [require('tailwindcss'), require('autoprefixer')],
};
