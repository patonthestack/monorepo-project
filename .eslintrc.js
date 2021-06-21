module.exports = {
  root: true,
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'react/prop-types': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'no-restricted-globals': 'off',
    'no-unused-vars': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['react-app', '@react-native-community'],
    },
    {
      files: ['*.js', '*.ts', '*.tsx'],
      extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],
    },
  ],
};
