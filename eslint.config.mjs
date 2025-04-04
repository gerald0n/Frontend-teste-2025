import { FlatCompat } from '@eslint/eslintrc';

import { dirname } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'prettier',
      'plugin:import/recommended',
      'plugin:import/typescript',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
    plugins: ['import'],
    rules: {
      semi: 'off',
      quotes: ['error', 'single'],
      'no-unexpected-multiline': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
      'no-var': 'error',
      'no-const-assign': 'error',      
      'no-irregular-whitespace': 'error',
      'no-unreachable': 'error',
      'valid-typeof': 'error',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          'groups': [
            'external',
            'builtin',
            'internal',
            ['parent', 'sibling', 'index']
          ],
          'pathGroups': [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            }
          ],
          'pathGroupsExcludedImportTypes': ['builtin'],
          'newlines-between': 'always',
          'alphabetize': {
            'order': 'asc',
            'caseInsensitive': true,
          },
          'distinctGroup': true,
          'warnOnUnassignedImports': false,
        }
      ]
    }
  }),
];

export default eslintConfig;
