# My usual ESLint config

## Setup

```sh
$ npm i -D @frosas/eslint-config
```

Copy the project-specific files and edit them as needed:

```sh
$ cp -a node_modules/@frosas/eslint-config/project-files/. .
```

Integrate it into the project development workflow. For example, in your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "test": "npm run lint && ..."
  }
}
```

## Contributing

- `npm run generate-types` and commit the changes
- Update CHANGELOG.md
- `npm version <major | minor | patch>`
- `npm publish [--tag next]`
