<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";
  import { type WithElementRef } from "bits-ui";

  let {
    ref = $bindable(null),
    class: className,
    inset,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    inset?: boolean;
  } = $props();
</script>

<div
  bind:this={ref}
  class={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
  {...restProps}
>
  {@render children?.()}
</div>
