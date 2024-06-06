<script lang="ts">
    import type { LayoutData } from "./$types";
    import { createTranslator } from "$lib/i18n/i18n";
    import ArrowDownRightIcon from "$lib/icons/arrow-down-right-icon.svelte";

    type PageProps = {
        data: LayoutData;
    };

    let { data }: PageProps = $props();

    const translator = createTranslator(data.language);
</script>

<div
    class="bg-accent h-screen w-screen flex flex-col items-center justify-center gap-6 text-background font-black"
>
    <div class="flex flex-col gap-4">
        <h1 class="text-[10rem]/[9rem]">Seppe</h1>
        <div class="flex gap-16">
            <nav
                class="flex flex-col justify-between h-full py-4 text-background/65"
            >
                <a
                    href="#about-me"
                    class="flex gap-2 items-end hover:text-background transition-colors"
                >
                    <p class="font-bold text-4xl">
                        {translator.get("navigation.about-me")}
                    </p>
                    <ArrowDownRightIcon class="w-8" />
                </a>
                <a
                    href="#projects"
                    class="flex gap-2 items-end hover:text-background transition-colors"
                >
                    <p class="font-bold text-4xl">
                        {translator.get("navigation.projects")}
                    </p>
                    <ArrowDownRightIcon class="w-8" />
                </a>
            </nav>
            <h1 class="text-[10rem]/[9rem]">Meeus</h1>
        </div>
    </div>
</div>

<section id="about-me" class="px-32 py-10">
    <h2 class="text-accent text-5xl font-black">
        {translator.get("pages.home.introduction.title")}
    </h2>

    <div class="w-reading text-justify">
        <p class="mt-3">{translator.get("pages.home.introduction.intro")}</p>
    </div>
</section>

<section id="projects" class="px-32 py-10">
    <h2 class="text-accent text-5xl font-black">
        {translator.get("pages.home.projects.title")}
    </h2>
    <p class="mt-3">{translator.get("pages.home.projects.subtitle")}</p>
</section>
