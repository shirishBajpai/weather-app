module.exports = {
	presets: [
		[
			'@babel/preset-react',
			{
				targets: {},
				useBuiltIns: 'usage',
				runtime: 'automatic'
			}
		],
		[
			'@babel/preset-env',
			{
				targets: {
					browsers: '> 2%'
				}
			}
		]
	],
	plugins: ['@babel/plugin-transform-runtime'],
	env: {
		test: {
			plugins: ['dynamic-import-node']
		}
	}
};
