module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 9,
  },
  // parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:node/recommended",
    "plugin:vue/recommended",
    "prettier",
    "prettier/vue",
  ],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    "node/no-unpublished-require": 0,
    "node/no-unsupported-features/es-syntax": 0,
  },
};
