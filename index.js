const js = require("@eslint/js")
const prettierPluginRecommended = require("eslint-plugin-prettier/recommended")

/** @type import('eslint').Linter.FlatConfig[] */
module.exports = [
  js.configs.recommended,
  prettierPluginRecommended,
  { rules: { "prettier/prettier": ["error", { semi: false }] } },
]
