const js = require("@eslint/js")
const prettierPluginRecommended = require("eslint-plugin-prettier/recommended")
const { default: tsEslint, config } = require("typescript-eslint")
const reactConfigRecommended = require("eslint-plugin-react/configs/recommended")

const reactConfig = config({
  files: ["**/*.{jsx,tsx}"],
  ...reactConfigRecommended,
  settings: {
    ...reactConfigRecommended.settings,
    react: {
      ...reactConfigRecommended.settings?.react,
      version: "detect",
    },
  },
})

const formattingConfig = config(prettierPluginRecommended, {
  rules: { "prettier/prettier": ["error", { semi: false }] },
})

const tsConfig = config(...tsEslint.configs.recommended, {
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
}).map((config) => ({ ...config, files: ["**/*.{ts,tsx}"] }))

module.exports = config(
  js.configs.recommended,
  ...formattingConfig,
  ...tsConfig,
  ...reactConfig,
)
