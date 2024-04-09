// See https://eslint.org/docs/latest/use/configure/

const globals = require("globals")
const frosasConfig = require("@frosas/eslint-config")

/** @type import('eslint').Linter.FlatConfig[] */
module.exports = [
  ...frosasConfig,
  {
    languageOptions: {
      parserOptions: {
        // For an ECMAScript version appropriate to a given Node version, check
        // https://node.green
        ecmaVersion: 2020,
      },
      globals: {
        ...globals.es2020,
        // ...globals.node,
        // ...globals.browser,
      },
    },
  },
  {
    ignores: [
      // 'dist/'
    ],
  },
]
