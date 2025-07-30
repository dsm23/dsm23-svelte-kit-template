<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import { fn } from "storybook/test";
  import Button from "./button.svelte";

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: "Components/Shadcn/Button",
    component: Button,
    parameters: {
      layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
      variant: {
        options: [
          "default",
          "secondary",
          "destructive",
          "outline",
          "ghost",
          "link",
        ],
        control: { type: "select" },
      },
      size: {
        options: ["default", "sm", "lg", "icon"],
        control: { type: "select" },
      },
    },
    args: {
      onClick: fn(),
    },
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Primary" args={{ label: "Button" }}>Button</Story>

<Story name="Secondary" args={{ variant: "secondary" }}>Button</Story>

<Story name="Destructive" args={{ variant: "destructive" }}>Button</Story>

<Story name="Outline" args={{ variant: "outline" }}>Button</Story>

<Story name="Ghost" args={{ variant: "ghost" }}>Button</Story>

<Story name="Link" args={{ variant: "link" }}>Button</Story>
