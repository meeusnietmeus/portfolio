<script lang="ts">
    import type { Snippet } from "svelte";
    import "../app.css";

    type LayoutProps = {
        children: Snippet;
    };

    let { children }: LayoutProps = $props();
</script>

{@render children()}