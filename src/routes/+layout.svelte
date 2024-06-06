<script lang="ts">
    import "../app.css";
    import type { Snippet } from "svelte";

    type LayoutProps = {
        children: Snippet;
    };

    const { children }: LayoutProps = $props();
</script>

{@render children()}