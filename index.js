import { resolve } from "node:path"
import { includeIgnoreFile } from "@eslint/compat"
import js from "@eslint/js"
import json from "@eslint/json"
import { defineConfig } from "eslint/config"
import importPlugin from "eslint-plugin-import"
import prettierPluginRecommended from "eslint-plugin-prettier/recommended"
import reactConfigRecommended from "eslint-plugin-react/configs/recommended.js"
import globals from "globals"
import tsEslint from "typescript-eslint"

/** @import { Linter } from "eslint" */

const jsConfig = defineConfig([
  {
    files: ["**/*.{js,cjs,mjs,jsx,ts,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
])

const jsonConfig = defineConfig([
  {
    files: ["**/*.json"],
    ignores: ["package-lock.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    files: ["**/tsconfig.json", ".vscode/*.json"],
    plugins: { json },
    language: "json/jsonc",
    languageOptions: { allowTrailingCommas: true },
    extends: ["json/recommended"],
  },
])

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

const importConfig = defineConfig({
  plugins: { import: importPlugin },
  rules: {
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        named: true,
      },
    ],
  },
})

/**
 * @type {(dirname: string) => Linter.Config}
 * @param {string | undefined} dirname
 */
export const buildGitIgnoreConfig = (dirname) => {
  const path = resolve(dirname, ".gitignore")
  return includeIgnoreFile(path, path)
}

export default defineConfig([
  ...jsConfig,
  ...jsonConfig,
  ...formattingConfig,
  ...tsConfig,
  ...reactConfig,
  ...importConfig,
])

export {
  // Exported for convenience
  globals,
}
