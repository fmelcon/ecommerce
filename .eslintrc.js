module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y", "react-hooks"],
  rules: {
    eqeqeq: 2,
    "react/display-name": 2,
    "react/jsx-key": 2,
    "react/jsx-no-undef": 2,
    "react/no-unescaped-entities": 2,
    "react/no-unknown-property": 2,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-pascal-case": 2,
    "react/prop-types": 2,
    "no-case-declarations": 2,
    "no-undef": 2,
    "no-empty": 2,
    "no-dupe-keys": 2,
    "no-redeclare": 2,
    "no-extra-semi": 2,
    "no-extra-boolean-cast": 2,
    "no-prototype-builtins": 2,
    "no-unused-vars": 2,
    "no-unused-expressions": 2,
    "default-case": 2,
    "jsx-a11y/alt-text": 2,
    "jsx-a11y/anchor-is-valid": 2,
    "array-callback-return": 2,
    "react-hooks/exhaustive-deps": 2,
    "react-hooks/rules-of-hooks": 2,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["build/*", "*.spec.js"],
};
