<script lang="ts">
    import "../app.css";
    import type { Snippet } from "svelte";

    type LayoutProps = {
        children: Snippet;
    };

    const { children }: LayoutProps = $props();
</script>

<main class="overflow-x-hidden">
    {@render children()}
</main>