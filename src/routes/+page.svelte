<script lang="ts">
  import Button from "~/components/ui/button/button.svelte";
  import AbsoluteImports from "~/lib/svgs/absoluteImports.svelte";
  import Bundle from "~/lib/svgs/bundle.svelte";
  import Chatgpt from "~/lib/svgs/chatgpt.svelte";
  import Cva from "~/lib/svgs/cva.svelte";
  import Eslint from "~/lib/svgs/eslint.svelte";
  import GitHooks from "~/lib/svgs/gitHooks.svelte";
  import GitHubActions from "~/lib/svgs/githubActions.svelte";
  import Graph from "~/lib/svgs/graph.svelte";
  import Healthcheck from "~/lib/svgs/healthcheck.svelte";
  import Jest from "~/lib/svgs/jest.svelte";
  import Next from "~/lib/svgs/next.svelte";
  import Observability from "~/lib/svgs/observability.svelte";
  import PatchPackage from "~/lib/svgs/patchPackage.svelte";
  import Playwright from "~/lib/svgs/playwright.svelte";
  import Radix from "~/lib/svgs/radix.svelte";
  import Renovate from "~/lib/svgs/renovate.svelte";
  import SemanticRelease from "~/lib/svgs/semanticRelease.svelte";
  import SmokeTest from "~/lib/svgs/smokeTest.svelte";
  import Storybook from "~/lib/svgs/storybook.svelte";
  import Tailwind from "~/lib/svgs/tailwind.svelte";
  import Typescript from "~/lib/svgs/typescript.svelte";

  const LP_GRID_ITEMS = [
    {
      title: "Next.js",
      description: "Fast by default, with config optimized for performance.",
      icon: Next,
    },
    {
      title: "Tailwind CSS",
      description: "A utility-first CSS framework for rapid UI development.",
      icon: Tailwind,
    },
    {
      title: "ESlint & Prettier",
      description: "For clean, consistent, and error-free code.",
      icon: Eslint,
    },
    {
      title: "Extremely strict TypeScript",
      description: "With `ts-reset` library for ultimate type safety.",
      icon: Typescript,
    },
    {
      title: "Bundle analyzer plugin",
      description: "Keep an eye on your bundle size.",
      icon: Bundle,
    },
    {
      title: "Jest & React Testing Library",
      description: "For rock-solid unit and integration tests.",
      icon: Jest,
    },
    {
      title: "Playwright",
      description: "Write end-to-end tests like a pro.",
      icon: Playwright,
    },
    {
      title: "Storybook",
      description: "Create, test, and showcase your components.",
      icon: Storybook,
    },
    {
      title: "Smoke Testing & Acceptance Tests",
      description: "For confidence in your deployments.",
      icon: SmokeTest,
    },
    {
      title: "Conventional commits git hook",
      description: "Keep your commit history neat and tidy.",
      icon: GitHooks,
    },
    {
      title: "Observability",
      description: "Open Telemetry integration for seamless monitoring.",
      icon: Observability,
    },
    {
      title: "Absolute imports",
      description: "No more spaghetti imports.",
      icon: AbsoluteImports,
    },
    {
      title: "Health checks",
      description: "Kubernetes-compatible for robust deployments.",
      icon: Healthcheck,
    },
    {
      title: "Radix UI",
      description: "Headless UI components for endless customization.",
      icon: Radix,
    },
    {
      title: "CVA",
      description: "Create a consistent, reusable, and atomic design system.",
      icon: Cva,
    },
    {
      title: "Renovate BOT",
      description: "Auto-updating dependencies, so you can focus on coding.",
      icon: Renovate,
    },
    {
      title: "Patch-package",
      description: "Fix external dependencies without losing your mind.",
      icon: PatchPackage,
    },
    {
      title: "Components coupling & cohesion graph",
      description: "A tool for managing component relationships.",
      icon: Graph,
    },
    {
      title: "GitHub Actions",
      description:
        "Pre-configured actions for smooth workflows, including Bundle Size and performance stats.",
      icon: GitHubActions,
    },
    {
      title: "Automated ChatGPT Code Reviews",
      description: "Stay on the cutting edge with AI-powered code reviews!",
      icon: Chatgpt,
    },
    {
      title: "Semantic Release",
      description: "For automatic changelog generation.",
      icon: SemanticRelease,
    },
  ];
</script>

<main>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="mx-auto grid max-w-(--breakpoint-xl) px-4 py-8 text-center lg:py-16"
    >
      <div class="mx-auto place-self-center">
        <h1
          class="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white"
        >
          SvelteKit Enterprise Boilerplate
        </h1>
        <p
          class="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400"
        >
          Jumpstart your enterprise project with our feature-packed,
          high-performance SvelteKit boilerplate! Experience rapid UI
          development, AI-powered code reviews, and an extensive suite of tools
          for a smooth and enjoyable development process.
        </p>
        <Button
          href="https://github.com/dsm23/dsm23-svelte-kit-template"
          class="mr-3"
        >
          Get started
        </Button>
        <Button
          variant="outline"
          href="https://vercel.com/new/git/external?repository-url=https://github.com/dsm23/dsm23-svelte-kit-template/"
        >
          Deploy Now
        </Button>
      </div>
    </div>
  </section>
  <section class="bg-white dark:bg-gray-900">
    <div class="mx-auto max-w-(--breakpoint-xl) px-4 py-8 sm:py-16 lg:px-6">
      <div
        class="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3"
      >
        {#each LP_GRID_ITEMS as singleItem}
          <div class="flex flex-col items-center justify-center text-center">
            <div
              class="mb-4 flex size-10 items-center justify-center rounded-full p-1.5 text-blue-700 lg:size-12"
            >
              <svelte:component this={singleItem.icon} />
            </div>
            <h2 class="mb-2 text-xl font-bold dark:text-white">
              {singleItem.title}
            </h2>
            <p class="text-gray-500 dark:text-gray-400">
              {singleItem.description}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </section>
</main>
