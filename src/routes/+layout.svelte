<script lang="ts">
    import "../app.css";
    import type { Snippet } from "svelte";

    type LayoutProps = {
        children: Snippet;
    };

    const { children }: LayoutProps = $props();
</script>


<main>
    {@render children()}
</main>