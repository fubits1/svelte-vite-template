module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: ['eslint:recommended', 'plugin:svelte/recommended', 'prettier'],
	overrides: [{ files: ['*.svelte'], parser: 'svelte-eslint-parser' }],
	parserOptions: {
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
		sourceType: 'module'
	}
}
