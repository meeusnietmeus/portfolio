<script lang="ts">
    import { createTranslator } from "$lib/i18n/i18n";
    import me from "$lib/images/me.webp";

    type ComponentProps = {
        language: string;
    };
    const { language }: ComponentProps = $props();

    const translator = createTranslator(language);
</script>

<section id="about-me" class="mt-10 scroll-mt-10 md:scroll-mt-24">
    <h2 class="text-accent text-5xl font-black">
        {translator.get("pages.home.introduction.title")}
    </h2>

    <div class="flex flex-col lg:flex-row gap-36 mt-5">
        <img
            src={me}
            alt="Seppe Meeus"
            height="424"
            width="170"
            class="self-center scale-125"
        />
        <div class="max-w-reading text-justify space-y-5">
            <p>{translator.get("pages.home.introduction.intro")}</p>
            <p>
                {translator.get("pages.home.introduction.hardskills")}
            </p>
            <p>
                {translator.get("pages.home.introduction.softskills")}
            </p>
        </div>
    </div>
</section>
