const js = require("@eslint/js")
const prettierPluginRecommended = require("eslint-plugin-prettier/recommended")
const { default: tsEslint, config } = require("typescript-eslint")

const formattingConfig = config(prettierPluginRecommended, {
  rules: { "prettier/prettier": ["error", { semi: false }] },
})

const tsConfig = config(...tsEslint.configs.recommended, {
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
})

module.exports = config(
  js.configs.recommended,
  ...formattingConfig,
  ...tsConfig,
)
