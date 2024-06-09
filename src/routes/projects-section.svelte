<script lang="ts">
    import { createTranslator } from "$lib/i18n/i18n";

    type ComponentProps = {
        language: string;
    };
    const { language }: ComponentProps = $props();

    const translator = createTranslator(language);
</script>

<section id="projects">
    <h2 class="text-accent text-5xl font-black">
        {translator.get("pages.home.projects.title_1")}
        <span class="underline"
            >{translator.get("pages.home.projects.title_2")}</span
        >
    </h2>
    <p class="mt-3">{translator.get("pages.home.projects.subtitle")}</p>
</section>
