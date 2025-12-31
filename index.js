import js from "@eslint/js"
import { defineConfig } from "eslint/config"
import prettierPluginRecommended from "eslint-plugin-prettier/recommended"
import reactConfigRecommended from "eslint-plugin-react/configs/recommended.js"
import globals from "globals"
import tsEslint from "typescript-eslint"

const formattingConfig = defineConfig([
  prettierPluginRecommended,
  { rules: { "prettier/prettier": ["error", { semi: false }] } },
])

const tsConfig = defineConfig([
  ...tsEslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  },
]).map((config) => ({ ...config, files: ["**/*.{ts,tsx}"] }))

const reactConfig = defineConfig([
  {
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
  },
])

export default defineConfig([
  js.configs.recommended,
  ...formattingConfig,
  ...tsConfig,
  ...reactConfig,
])

export {
  // Exported for convenience
  globals,
}
