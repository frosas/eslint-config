/* eslint-env node */

import globals from "globals"
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
        ...globals.es2020,
        ...globals.node,
      },
    },
  },
]
