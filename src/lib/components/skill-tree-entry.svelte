<script lang="ts">
    import ArrowCornerDownRight from "$lib/icons/arrow-corner-down-right.svelte";
    import type { Snippet } from "svelte";
    import { twMerge } from "tailwind-merge";

    type ComponentProps = {
        indentationLevel?: number;
        text: string;
        children: Snippet;
    }

    const { indentationLevel, text, children }: ComponentProps = $props();
</script>

<div class={twMerge("flex gap-4 items-center", !indentationLevel && "mt-4", indentationLevel === 2 && "ml-16")}>
    {#if !!indentationLevel}
    <ArrowCornerDownRight
        class="w-5 h-5 mr-5 text-primary-muted/30"
    />
    {/if}
    <div class="w-6">
        {@render children()}
    </div>
    <h3 class="text-3xl font-medium text-primary-muted">
        {text}
    </h3>
</div>