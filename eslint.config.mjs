import typescriptEslint from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/dist/', '**/build', '**/types/', '**/node_modules/', '**/out/', '**/public/'],
  },
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      react,
      prettier,
    },

    languageOptions: {
      globals: {
        React: 'writable',
      },

      parser: tsParser,
    },

    rules: {
      'react/react-in-jsx-scope': 'off',

      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          printWidth: 110,
          semi: true,
          arrowParens: 'avoid',
        },
      ],

      'react/prop-types': 'off',
      'import/no-anonymous-default-export': [
        'error',
        {
          allowArray: true,
          allowArrowFunction: true,
          allowAnonymousClass: true,
          allowAnonymousFunction: true,
          allowCallExpression: true, // The true value here is for backward compatibility
          allowNew: true,
          allowLiteral: true,
          allowObject: true,
        },
      ],
    },
  },
];
