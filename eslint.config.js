import { config } from "typescript-eslint"
import frosasConfig, { globals } from "./index.js"

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
        ...globals.node,
      },
    },
  },
  { ignores: ["types/"] },
)
