module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-restricted-syntax': 'off',
    'new-cap': 'off',
    'no-console': 'off',
    'no-promise-executor-return': 'off',
    'prefer-const': 'off',
    'no-alert': 'off',
    'import/extensions': 'off',
    'linebreak-style': 'off',
  },
};
