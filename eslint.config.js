import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const js = require('./vendor/@eslint/js/src/index.js')
const globals = require('./vendor/globals/index.js').default
// Disabled react-hooks and react-refresh plugins due to unavailable packages

export default [
  { ignores: ['dist', 'vendor'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    // No additional plugins
    plugins: {},
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
]
