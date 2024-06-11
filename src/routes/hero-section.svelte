<script lang="ts">
    import { createTranslator } from "$lib/i18n/i18n";
    import ArrowDownRightIcon from "$lib/icons/arrow-down-right-icon.svelte";
    import TranslateIcon from "$lib/icons/translate-icon.svelte";

    type ComponentProps = {
        language: string;
    };
    const { language }: ComponentProps = $props();

    const translator = createTranslator(language);
</script>

<div
    class="bg-accent h-screen w-full flex flex-col items-center justify-center gap-6 text-background font-black relative"
>
    <div class="flex flex-col gap-4">
        <h1 class="text-7xl sm:text-[10rem]/[9rem]">Seppe</h1>
        <div class="flex md:gap-16 flex-col md:flex-row">
            <nav
                class="flex flex-col justify-between h-full py-3 text-background/65 order-2 md:order-1"
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
            <h1 class="text-7xl sm:text-[10rem]/[9rem] order-1 md:order-2">
                Meeus
            </h1>
        </div>
    </div>

    <!-- <button
        type="button"
        class="absolute bottom-6 right-8 hover:bg-background hover:text-primary transition-colors rounded-full p-2"
        onclick={() => translator.changeLanguage("nl")}
    >
        <TranslateIcon class="w-6" />
    </button> -->
</div>
