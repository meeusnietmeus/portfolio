<script lang="ts">
    import { createTranslator } from "$lib/i18n/i18n";
    import MailIcon from "$lib/icons/mail-icon.svelte";
    import MenuIcon from "$lib/icons/menu-icon.svelte";
    import Linkedin from "$lib/icons/socials/linkedin.svelte";

    type ComponentProps = {
        language: string;
    };
    const { language }: ComponentProps = $props();

    const translator = createTranslator(language);
</script>

<header class="w-full fixed bottom-4 lg:top-2 z-50">
    <nav
        class="container mx-auto flex rounded-3xl bg-background py-4 px-8 items-center shadow-xl border border-primary/30 justify-between"
    >
        <div class="hidden md:flex gap-5 items-center">
            <a href="/">
                <h3 class="text-3xl text-primary mr-12 hidden lg:block">
                    Seppe Meeus
                </h3></a
            >
            <a href="/">{translator.get("navigation.home")}</a>
            <a href="/#about-me">{translator.get("navigation.about-me")}</a>
            <a href="/#projects">{translator.get("navigation.projects")}</a>
            <a href="/projects/internship"
                >{translator.get("pages.internship.title")}</a
            >
        </div>
        <div class="md:hidden">
            <button popovertarget="popover-nav">
                <MenuIcon class="w-5" />
            </button>
            <div
                popover="auto"
                id="popover-nav"
                class="mb-20 ml-10 bg-background border-accent border rounded-xl py-3 px-5"
            >
                <div class="flex flex-col gap-2">
                    <a href="/">{translator.get("navigation.home")}</a>
                    <a href="/#about-me"
                        >{translator.get("navigation.about-me")}</a
                    >
                    <a href="/#projects"
                        >{translator.get("navigation.projects")}</a
                    >
                    <a href="/projects/internship"
                        >{translator.get("pages.internship.title")}</a
                    >
                </div>
            </div>
        </div>
        <div class="flex gap-4 items-center">
            <a
                href="https://www.linkedin.com/in/seppe-meeus-b40743268/"
                target="_blank"
            >
                <Linkedin class="w-6 h-6 fill-primary" />
            </a>
            <a
                href="#contact"
                class="rounded-full bg-primary text-background px-4 py-1"
                >{translator.get("navigation.connect")}</a
            >
        </div>
    </nav>
</header>

<style>
    @media (min-width: 1024px) {
        header {
            bottom: unset;
        }
    }
</style>
