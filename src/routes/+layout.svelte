<script lang="ts">
  import DarkMode from "~/components/dark-mode/index.svelte";

  import "~/app.css";

  import { ModeWatcher } from "mode-watcher";

  let { children } = $props();
</script>

<ModeWatcher />

{@render children()}
<footer
  class="mx-auto flex w-full items-center justify-center border-t py-16 text-center text-xs"
>
  <DarkMode />
</footer>
