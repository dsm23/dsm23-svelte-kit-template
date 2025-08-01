// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import { fileURLToPath } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import storybook from "eslint-plugin-storybook";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import ts from "typescript-eslint";

const gitignorePath = fileURLToPath(new URL("./.gitignore", import.meta.url));

export default ts.config(
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs["flat/recommended"],
  prettier,
  ...svelte.configs["flat/prettier"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.svelte"],

    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
  storybook.configs["flat/recommended"],
);
