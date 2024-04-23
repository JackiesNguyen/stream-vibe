/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')

const folders = fs
  .readdirSync('src', { withFileTypes: true })
  // .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name)

const isCI = process.env.CI === 'true'
const isDev = !isCI && process.env.NODE_ENV === 'development'
const severity = isDev ? 0 : 'error'

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  overrides: [
    {
      files: ['**/*.{js,jsx,ts,tsx,cjs}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json', 'tsconfig.eslint.json'],
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/jsx-runtime',
        'plugin:prettier/recommended',
        'plugin:jest-dom/recommended',
      ],
      plugins: ['@typescript-eslint', 'immer', 'simple-import-sort', 'import'],
      rules: {
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            fixStyle: 'inline-type-imports',
          },
        ],

        semi: 0,
        curly: ['error', 'multi-line'],
        'no-param-reassign': [
          'error',
          {
            props: true,
            ignorePropertyModificationsForRegex: ['^draft', 'state'],
          },
        ],

        'react/jsx-wrap-multilines': [
          'error',
          {
            prop: 'ignore',
          },
        ],
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/interactive-supports-focus': 0,
        'react/jsx-props-no-spreading': 0,
        'react/state-in-constructor': ['error', 'never'],
        'react/function-component-definition': [
          'error',
          {
            namedComponents: ['arrow-function', 'function-declaration', 'function-expression'],
            unnamedComponents: 'arrow-function',
          },
        ],
        'react/prop-types': 0,
        'react/require-default-props': 0,

        'prettier/prettier': severity,

        'immer/no-update-map': 'error',

        'simple-import-sort/imports': [
          severity,
          {
            groups: [
              // Side effect imports.
              ['^\\u0000'],
              // Packages. `react` related packages come first.
              // Things that start with a letter (or digit or underscore), or `@` followed by a
              // letter.
              ['^react', '^vue', '^@?\\w'],
              // Absolute imports and Relative imports.
              [`^~/(${folders.join('|')})(/.*|$)?`],
              // Relative imports.
              // Anything that starts with a dot.
              ['^\\.'],
            ],
          },
        ],
        'simple-import-sort/exports': 'error',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'import/extensions': ['error', 'never'],
        '@typescript-eslint/no-misused-promises': [
          2,
          {
            checksVoidReturn: {
              attributes: false,
            },
          },
        ],
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
          typescript: {},
        },
      },
    },
  ],
}
