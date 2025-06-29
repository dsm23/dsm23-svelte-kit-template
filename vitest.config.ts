import { sveltekit } from "@sveltejs/kit/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";
import storybookTest from "@storybook/addon-vitest/vitest-plugin";
import tailwindcss from "@tailwindcss/vite";
import { svelteTesting } from "@testing-library/svelte/vite";
import {
  coverageConfigDefaults,
  defineConfig,
  mergeConfig,
} from "vitest/config";
import viteConfig from "./vite.config";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [sveltekit(), tailwindcss()],

    test: {
      coverage: {
        all: true,
        include: ["src/**/*.svelte", "src/**/*.[jt]s?(x)"],
        exclude: [
          "src/**/*.stories.svelte",
          "src/**/*.test.svelte",
          "src/test-utils/**",
          "src/mocks/**",
          "**/node_modules/**",
          "**/e2e/**",
          ...coverageConfigDefaults.exclude,
        ],
        thresholds: {
          lines: 10,
          functions: 10,
          branches: 10,
          statements: 10,
        },
      },
      projects: [
        {
          extends: "./vite.config.ts",
          plugins: [svelteTesting()],

          test: {
            name: "client",
            environment: "jsdom",
            clearMocks: true,
            include: ["src/**/*.svelte.{test,spec}.{js,ts}"],
            exclude: ["src/lib/server/**"],
            setupFiles: ["./vitest-setup-client.ts"],
          },
        },
        {
          extends: "./vite.config.ts",
          test: {
            name: "server",
            environment: "node",
            include: ["src/**/*.{test,spec}.{js,ts}"],
            exclude: ["src/**/*.svelte.{test,spec}.{js,ts}"],
          },
        },
        {
          extends: "./vite.config.ts",
          plugins: [
            // The plugin will run tests for the stories defined in your Storybook config
            // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
            storybookTest({ configDir: path.join(dirname, ".storybook") }),
          ],
          test: {
            name: "storybook",
            browser: {
              enabled: true,
              headless: true,
              provider: "playwright",
              instances: [{ browser: "chromium" }],
            },
            setupFiles: [".storybook/vitest.setup.ts"],
          },
        },
      ],
    },
  }),
);
