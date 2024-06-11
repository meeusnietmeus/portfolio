<script lang="ts">
    import "../app.css";
    import type { Snippet } from "svelte";
    import type { LayoutData } from "./$types";
    import NavBar from "./nav-bar.svelte";
    import Footer from "./footer.svelte";

    type LayoutProps = {
        data: LayoutData;
        children: Snippet;
    };

    const { data, children }: LayoutProps = $props();
    const language = $derived(data.language);
</script>

<NavBar {language} />
<main class="">
    {@render children()}
</main>
<Footer />