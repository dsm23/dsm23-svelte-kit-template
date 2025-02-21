<script lang="ts">
  import Laptop from "lucide-svelte/icons/laptop";
  import Moon from "lucide-svelte/icons/moon";
  import Sun from "lucide-svelte/icons/sun";
  import { mode, setMode } from "mode-watcher";
  import { buttonVariants } from "~/components/ui/button/";
  import * as DropdownMenu from "~/components/ui/dropdown-menu";
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger
    class={buttonVariants({ variant: "ghost", size: "sm" })}
  >
    <span class="sr-only">Theme switcher</span>
    {#if $mode === "light"}
      <Sun class="text-muted-foreground size-4" />
    {:else if $mode === "dark"}
      <Moon class="text-muted-foreground size-4" />
    {:else}
      <Laptop class="text-muted-foreground size-4" />
    {/if}
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="start">
    <DropdownMenu.RadioGroup
      value={$mode}
      onValueChange={(e) => setMode(e as "light" | "dark" | "system")}
    >
      <DropdownMenu.RadioItem class="flex gap-2" value="light">
        <Sun class="text-muted-foreground size-4" />
        <span>Light</span>
      </DropdownMenu.RadioItem>
      <DropdownMenu.RadioItem class="flex gap-2" value="dark">
        <Moon class="text-muted-foreground size-4" />
        <span>Dark</span>
      </DropdownMenu.RadioItem>
      <DropdownMenu.RadioItem class="flex gap-2" value="system">
        <Laptop class="text-muted-foreground size-4" />
        <span>System</span>
      </DropdownMenu.RadioItem>
    </DropdownMenu.RadioGroup>
  </DropdownMenu.Content>
</DropdownMenu.Root>
