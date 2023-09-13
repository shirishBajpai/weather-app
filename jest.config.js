module.exports = {
	testEnvironment: "jsdom",
	transformIgnorePatterns: ["<rootDir>/node_modules/(?!@dtsl/jsutils)/"],
	collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
	coveragePathIgnorePatterns: [
	  "<rootDir>/public/assets/*",
	  "<rootDir>/src/index.js",
	],
	moduleDirectories: ["node_modules", "tests", "app"],
	moduleNameMapper: {
	  "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
		"<rootDir>/config/jest/__mocks__/fileMock.js",
		'\\.(css|less)$': '<rootDir>/tests/jest/mocks/styleMock.js',
	  "^app/(.*)$": "<rootDir>/src/$1",
	  "^public/(.*)$": "<rootDir>/public/$1",
	},
	testMatch: ["**/?(*.)(spec|test).js?(x)"],
	transform: {
	  "^.+\\.(js|jsx)?$": "babel-jest",
	},
  };