/* eslint-env node */

const globals = require("globals")
const frosasConfig = require(".")

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
        ...globals.node,
      },
    },
  },
]
