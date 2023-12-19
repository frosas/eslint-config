/* eslint-env node */

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ["./index.js"],
  parserOptions: {
    // For an ECMAScript version appropriate to a given Node version, check
    // https://node.green
    ecmaVersion: 2020,
  },
  env: {
    es6: true,
    node: true,
  },
}
