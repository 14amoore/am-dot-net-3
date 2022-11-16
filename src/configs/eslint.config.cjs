module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'prettier',
    'plugin:vitest-globals/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // plugins: ['vue'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': [
      'error',
      {
        // import/no-unresolved uses ignore instead of ignores :p
        ignore: ['\\.svg\\?url', '\\.svg\\?raw'],
      },
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'],
      },
    ],
    // Fix import order conflict with @ alias
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    // Disable all warnings. TODO re-enable before release + get rid of all logs.
    'no-console': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.test.js', '**/vitestUtils/setupFiles/**/*.js'],
      env: {
        'vitest-globals/env': true,
      },
    },
  ],
};
