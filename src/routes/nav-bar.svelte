<script lang="ts">
    import { createTranslator } from "$lib/i18n/i18n";
    import Github from "$lib/icons/socials/github.svelte";
    import Linkedin from "$lib/icons/socials/linkedin.svelte";

    type ComponentProps = {
        language: string;
    };
    const { language }: ComponentProps = $props();

    const translator = createTranslator(language);
</script>

<header class="w-full fixed bottom-4 lg:top-2 px-10 z-50">
    <nav
        class="flex rounded-3xl bg-background py-4 px-8 items-center shadow-xl border border-primary/30 justify-between"
    >
        <div class="flex gap-4 items-center">
            <h3 class="text-xl lg:text-3xl text-primary mr-12 hidden md:block">
                Seppe Meeus
            </h3>
            <a href="/">{translator.get("navigation.home")}</a>
            <a href="/#projects">{translator.get("navigation.projects")}</a>
        </div>
        <div class="hidden sm:flex gap-4 items-center">
            <a
                href="https://www.linkedin.com/in/seppe-meeus-b40743268/"
                target="_blank"
            >
                <Linkedin class="w-5 h-5 fill-primary" />
            </a>
            <a href="https://github.com/meeusnietmeus" target="_blank">
                <Github class="w-5 h-5 fill-primary" />
            </a>
            <button
                type="button"
                class="text-background py-1 px-4 bg-primary rounded-full"
            >
                Curriculum Vitae
            </button>
        </div>
        <a href="/#contact" class="sm:hidden"
            >{translator.get("navigation.connect")}</a
        >
    </nav>
</header>

<style>
    @media (min-width: 1024px) {
        header {
            bottom: unset;
        }
    }
</style>
