/* eslint-env node */

// See https://eslint.org/docs/user-guide/configuring
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
};
