# My usual ESLint config

## Setup

```sh
$ npx install-peerdeps -d @frosas/eslint-config
```

TODO Verify this can be done in npm 7 instead:

```sh
$ npm i -D @frosas/eslint-config
```

Copy the project-specific files and edit them as needed:

```sh
$ cp -a node_modules/@frosas/eslint-config/project-files/. .
```

Integrate it in the project development workflow. For example, in your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint .",
    "test": "npm run lint && ...",
    "watch-lint": "onchange -i '**/*.js' -- npm run lint -- --fix",
    "watch": "concurrently -k \"npm run watch-lint\" \"...\""
  }
}
```

## Contributing

- Update CHANGELOG.md
- `npm version <major | minor | patch>`
- `npm publish`
