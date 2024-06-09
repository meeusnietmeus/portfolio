<script lang="ts">
    import { createTranslator } from "$lib/i18n/i18n";

    type ComponentProps = {
        language: string;
    };
    const { language }: ComponentProps = $props();

    const translator = createTranslator(language);
</script>

<section id="about-me" class="mt-10">
    <h2 class="text-accent text-5xl font-black">
        {translator.get("pages.home.introduction.title")}
    </h2>

    <div class="w-reading text-justify flex flex-col gap-6 mt-3">
        <p>{translator.get("pages.home.introduction.intro")}</p>
        <p>{translator.get("pages.home.introduction.hardskills")}</p>
        <p>{translator.get("pages.home.introduction.softskills")}</p>
    </div>
</section>
