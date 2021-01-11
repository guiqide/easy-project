module.exports = {
  env: {
    node: true,
  },
  extends: [
    "prettier",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "prettier/@typescript-eslint",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
};
