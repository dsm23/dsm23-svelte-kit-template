import path from "node:path";
import storybookTest from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import {
  coverageConfigDefaults,
  defineConfig,
  mergeConfig,
} from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
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
      globals: false,
      logHeapUsage: true,
      projects: [
        {
          extends: true,
          resolve: process.env.VITEST
            ? {
                conditions: ["browser"],
              }
            : undefined,
          test: {
            name: "client",
            clearMocks: true,
            environment: "jsdom",
            include: ["src/**/*.svelte.{test,spec}.{js,ts}"],
            exclude: ["src/lib/server/**"],
            setupFiles: ["./vitest-setup-client.ts"],
          },
        },
        {
          extends: true,
          test: {
            name: "server",
            environment: "node",
            include: ["src/**/*.{test,spec}.{js,ts}"],
            exclude: ["src/**/*.svelte.{test,spec}.{js,ts}"],
          },
        },
        {
          extends: true,
          plugins: [
            // The plugin will run tests for the stories defined in your Storybook config
            // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
            storybookTest({
              configDir: path.join(import.meta.dirname, ".storybook"),
            }),
          ],
          test: {
            name: "storybook",
            browser: {
              enabled: true,
              headless: true,
              provider: playwright(),
              instances: [{ browser: "chromium" }],
            },
            setupFiles: [".storybook/vitest.setup.ts"],
          },
        },
      ],
    },
  }),
);
