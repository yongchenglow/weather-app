import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginUnusedImports from "eslint-plugin-unused-imports";
import eslintPluginTypescript from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: {
      prettier: eslintPluginPrettier,
      react: eslintPluginReact,
      "jsx-a11y": eslintPluginJsxA11y,
      import: eslintPluginImport,
      "@typescript-eslint": eslintPluginTypescript,
      "unused-imports": eslintPluginUnusedImports,
    },
    rules: {
      // ✅ Prettier
      "prettier/prettier": "error",

      // ✅ TypeScript Rules
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",

      // ✅ React Rules
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // ✅ Import Ordering
      "import/no-unresolved": "error",

      // ✅ Accessibility
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-is-valid": "error",

      // ✅ Code Quality
      "no-console": "warn",
      "no-debugger": "error",
      "prefer-const": "error",
      eqeqeq: ["error", "always"],

      // ✅ Unused Imports Cleanup
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
      ],
    },
  },

  // 🛑 Disables ESLint rules that conflict with Prettier
  prettier,
];

export default eslintConfig;
