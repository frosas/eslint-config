// See https://eslint.org/docs/latest/use/configure/

import globals from "globals"
import frosasConfig, { config } from "@frosas/eslint-config"

export default config(
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
)
