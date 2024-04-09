/* eslint-env node */

import frosasConfig from "./index.js"

/** @type import('eslint').Linter.FlatConfig[] */
export default [
  ...frosasConfig,
  {
    languageOptions: {
      parserOptions: {
        // For an ECMAScript version appropriate to a given Node version, check
        // https://node.green
        ecmaVersion: 2020,
      },
      globals: {
        es6: true,
        node: true,
      },
    },
    ignores: [
      "!**/.*.js", // Don't ignore hidden files
    ],
  },
]
