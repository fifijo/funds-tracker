// react-aria cares of accessibility
const a11yOff = Object.keys(require("eslint-plugin-jsx-a11y").rules).reduce((acc, rule) => {
	acc[`jsx-a11y/${rule}`] = "off";
	return acc;
}, {});

module.exports = {
	extends: ["eslint-config-airbnb", "eslint-config-airbnb-typescript", "prettier"],
	parser: "@typescript-eslint/parser",
	plugins: [
		"react",
		"eslint-plugin-react-hooks",
		"eslint-plugin-prettier",
		"eslint-plugin-vitest-globals",
		"@typescript-eslint",
		"jest-dom",
		"testing-library",
		"simple-import-sort",
		"prettier",
	],
	globals: {
		JSX: true,
	},
	ignorePatterns: [
		"node_modules/",
		"dist/",
		".eslintrc.js",
		"tailwind.config.js",
		"postcss.config.js",
	],
	rules: {
		...a11yOff,
		"prettier/prettier": "error",
		"arrow-body-style": "off",
		"prefer-arrow-callback": "off",
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
		"react/react-in-jsx-scope": "off",
		"react/function-component-definition": "off",
		"import/prefer-default-export": "off",
		"object-curly-newline": "off",
		"react/jsx-props-no-spreading": "off",
		"arrow-parens": ["error", "as-needed"],
		"react/jsx-fragments": "off",
		"no-param-reassign": "off",
		"no-plusplus": "off",
		"no-await-in-loop": "off",
		"class-methods-use-this": "off",
		"react/require-default-props": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": "warn",
		"consistent-return": "off",
		"quote-props": "off",
		"no-tabs": ["error", { allowIndentationTabs: true }],
		"react/jsx-wrap-multilines": "off",
		"@typescript-eslint/no-shadow": "off",
		"react/no-array-index-key": "off",
	},
};
