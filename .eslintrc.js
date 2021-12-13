module.exports = {
  env: {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'node': 'true'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 13
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'never'
    ]
  }
}
