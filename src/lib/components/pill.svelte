<script lang="ts">
    import type { Snippet } from "svelte";

    type ComponentProps = {
        children: Snippet;
    }

    const { children }: ComponentProps = $props();
</script>

<div class="bg-primary-muted/10 py-1 px-3 rounded-full flex gap-2">
    {@render children()}
</div>