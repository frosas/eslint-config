const js = require("@eslint/js")
const prettierPluginRecommended = require("eslint-plugin-prettier/recommended")
const { config } = require("typescript-eslint")

const formattingConfig = config(prettierPluginRecommended, {
  rules: { "prettier/prettier": ["error", { semi: false }] },
})

module.exports = config(js.configs.recommended, ...formattingConfig)
