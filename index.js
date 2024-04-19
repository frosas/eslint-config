import js from "@eslint/js"
import prettierPluginRecommended from "eslint-plugin-prettier/recommended"
import tsEslint, { config } from "typescript-eslint"
import reactConfigRecommended from "eslint-plugin-react/configs/recommended.js"
import globals from "globals"

const formattingConfig = config(prettierPluginRecommended, {
  rules: { "prettier/prettier": ["error", { semi: false }] },
})

const tsConfig = config(...tsEslint.configs.recommended, {
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
}).map((config) => ({ ...config, files: ["**/*.{ts,tsx}"] }))

const reactConfig = config({
  files: ["**/*.{jsx,tsx}"],
  ...{
    ...reactConfigRecommended,
    // Explicitly include it as it's not enumerable
    languageOptions: reactConfigRecommended.languageOptions,
  },
  settings: {
    ...reactConfigRecommended.settings,
    react: {
      ...reactConfigRecommended.settings?.react,
      version: "detect",
    },
  },
})

export default config(
  js.configs.recommended,
  ...formattingConfig,
  ...tsConfig,
  ...reactConfig,
)

export {
  // Exported for convenience
  config,
  globals,
}
