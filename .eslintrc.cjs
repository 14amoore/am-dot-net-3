const baseEslintConfig = require('./src/configs/eslint.config.cjs');

module.exports = {
  ...baseEslintConfig,
  root: true,
  settings: {
    'import/resolver': {
      alias: {
        map: ['@', './src'],
      },
    },
  },
};
