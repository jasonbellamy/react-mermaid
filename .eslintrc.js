module.exports = {
  root: true,
  extends: [
    'airbnb/base',
    'plugin:lodash/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'class-methods-use-this': 'off',
    'import/default': ['error'],
    'import/named': ['error'],
    'import/namespace': ['error', { allowComputed: false }],
    'import/prefer-default-export': ['warn'],
    'jsx-a11y/click-events-have-key-events': 'off',
    'linebreak-style': 'off',
    'lodash/matches-prop-shorthand': 'off',
    'lodash/prefer-constant': 'off',
    'lodash/prefer-includes': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-lodash-typecheck': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-return-assign': ['error', 'except-parens'],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'radix': 'off'
  },
};