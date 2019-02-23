module.exports = {
  root: true,
  extends: ['airbnb/base', 'plugin:lodash/recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'import/default': ['error'],
    'import/named': ['error'],
    'import/namespace': ['error', { allowComputed: false }],
    'import/prefer-default-export': ['warn'],
    'linebreak-style': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-includes': 'off',
    'lodash/prefer-lodash-typecheck': 'off',
    'lodash/matches-prop-shorthand': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-return-assign': ['error', 'except-parens'],
    'radix': 'off',
    'class-methods-use-this': 'off',
    'react/prop-types': 'off',
    'lodash/prefer-constant': 'off'
  },
};