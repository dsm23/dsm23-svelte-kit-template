import type { StorybookConfig } from "@storybook/sveltekit";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|ts|svelte)"],
  addons: [
    "@storybook/addon-svelte-csf",
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/sveltekit",
    options: {},
  },
  staticDirs: ["../static"],
};

export default config;
