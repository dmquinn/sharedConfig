const prettier = require('./lib/prettier.js');

module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    ...prettier,
  },
};
