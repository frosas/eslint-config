import js from "@eslint/js"
import prettierPluginRecommended from "eslint-plugin-prettier/recommended"

/** @type import('eslint').Linter.FlatConfig[] */
export default [
  js.configs.recommended,
  prettierPluginRecommended,
  { rules: { "prettier/prettier": ["error", { semi: false }] } },
]
