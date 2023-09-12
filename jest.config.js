module.exports = {
    type: 'module',
	roots: ['<rootDir>'],
	setupFiles: [require.resolve('whatwg-fetch')],
	setupFilesAfterEnv: [
		'@testing-library/jest-dom/extend-expect',
		'<rootDir>/tests/jest/jest-setup.js'
	],
	testEnvironment: 'jest-environment-jsdom-sixteen',

	collectCoverageFrom: [
		'app/**/*.{js,jsx,ts,tsx}',
		'!app/store/actions/**',
		'!app/store/store.js',
		'!**/node_modules/**',
		'!**/vendor/**'
	],
	moduleNameMapper: {
		'\\.(css|less)$': '<rootDir>/tests/jest/mocks/styleMock.js',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/tests/jest/mocks/fileMock.js',
		'^app/(.*)$': '<rootDir>/app/$1',
		'^tests/(.*)$': '<rootDir>/tests/$1'
		// '^common-billing-components/(.*)':
		// 	'<rootDir>/node_modules/common-billing-components/$1'
	},
	testMatch: ['**/?(*.)(spec|test).js?(x)'],
	transform: {
		'^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest'
	},
	transformIgnorePatterns: [
		'node_modules/(?!@dtsl/common-billing-components|@dtsl/react|@dtsl/icons|@dtsl/jsutils)'
	],
	testPathIgnorePatterns: ['/node_modules/', '/dist/'],
	moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};
