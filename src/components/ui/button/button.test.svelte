<script lang="ts">
  import Button from "./button.svelte";

  let props = $props();
</script>

<Button {...props}>Hello World!</Button>
