// See https://eslint.org/docs/latest/use/configure/

import frosasConfig, {
  buildGitIgnoreConfig,
  config,
  globals,
} from "@frosas/eslint-config"
import { globalIgnores } from "eslint/config"

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
  buildGitIgnoreConfig(import.meta.dirname),
  globalIgnores(["..."]),
)
