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

<footer id="contact" class="bg-accent w-full pt-5 mt-32 pb-24 md:pb-5">
    <div class="flex justify-center gap-5">
        <a
            href="https://www.linkedin.com/in/seppe-meeus-b40743268/"
            target="_blank"
        >
            <Linkedin class="w-8 h-8 fill-background" />
        </a>
        <a href="https://github.com/meeusnietmeus" target="_blank">
            <Github
                class="w-8 h-8 fill-background stroke-background text-background"
            />
        </a>
    </div>
    <p class="text-center mt-2">Seppe Meeus - 2024</p>
</footer>
