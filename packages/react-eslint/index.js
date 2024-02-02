module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'prettier'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
      'react-refresh/only-export-components': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'off',
      // 关闭!非空断言警告
      'react-hooks/rules-of-hooks': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'react-hooks/exhaustive-deps': 'off',
      '@typescript-eslint/ban-types': 'off'
    }
  }
  