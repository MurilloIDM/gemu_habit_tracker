import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    files: ["*.ts", "*.tsx"],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // ESLint base rules
      "no-unused-vars": "warn",
      "no-console": "warn",

      // TypeScript rules
      "@typescript-eslint/no-explicit-any": "off",

      // Prettier
      "prettier/prettier": "error",
    },
    ignores: ["node_modules/**", "dist/**"],
  },
];
