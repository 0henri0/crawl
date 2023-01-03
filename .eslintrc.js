module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',

  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
  },
};
