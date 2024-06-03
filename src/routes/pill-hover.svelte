<script lang="ts">
    import type { Snippet } from "svelte";

    type ComponentProps = {
        backgroundColor: string;
        children?: Snippet;
    }

    let { backgroundColor: backgroundHex, children }: ComponentProps = $props();
</script>

<div class="group">
    <div class="rounded-full h-28 w-8 group-hover:w-64 transition-all" style="background-color: {backgroundHex};">
        {#if children}
            {@render children()}  
        {/if}  
    </div>
</div>