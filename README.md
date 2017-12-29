# My usual ESLint Config

## Setup

```bash
$ npm i -D @frosas/eslint-config eslint prettier eslint-plugin-prettier concurrently onchange
```

Symlink the project-specific files:

```bash
$ ln -s node_modules/@frosas/eslint-config/project-files/.eslintrc.js
$ ln -s node_modules/@frosas/eslint-config/project-files/.eslintignore
```

You can also copy and edit them instead if you need customizations.

Integrate it in your project scripts. For example, in your `package.json`:

```json
{
  "scripts": {
    "build": "npm run lint && ...",
    "lint": "eslint .",
    "watch": "concurrently -k -n lint,... \"npm run watch-lint\" \"...\"",
    "watch-lint": "onchange -i '**/*.js' -- eslint . --fix"
  }
}
```