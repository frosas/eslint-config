const js = require("@eslint/js")
const prettierPluginRecommended = require("eslint-plugin-prettier/recommended")
const { config } = require("typescript-eslint")

module.exports = config(js.configs.recommended, prettierPluginRecommended, {
  rules: { "prettier/prettier": ["error", { semi: false }] },
})
