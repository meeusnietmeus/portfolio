<script lang="ts">
    import Project from "$lib/components/project.svelte";
    import { createTranslator } from "$lib/i18n/i18n";

    type ComponentProps = {
        language: string;
    };
    const { language }: ComponentProps = $props();

    const translator = createTranslator(language);
</script>

<section id="projects" class="scroll-mt-10 md:scroll-mt-24">
    <h2 class="text-accent text-5xl font-black">
        {translator.get("pages.home.projects.title")}
    </h2>
    <div class="flex items-center mt-3 mb-8 gap-2">
        <p>{translator.get("pages.home.projects.filter_1")}</p>
        <p>{translator.get("pages.home.projects.filter_2")}</p>
    </div>
    <div
        class="grid grid-cols-1 sm:grid-cols-4 sm:grid-rows-2 w-full h-[70vh] gap-5"
    >
        <Project
            href="/projects/internship"
            title={translator.get("pages.home.projects.internship.title")}
            introduction={translator.get(
                "pages.home.projects.internship.introduction",
            )}
            class="row-span-2 sm:col-span-2"
        />
        <Project
            href="/projects/project-4"
            title={translator.get("pages.home.projects.project-4.title")}
            introduction={translator.get(
                "pages.home.projects.project-4.introduction",
            )}
            class="sm:col-span-2 xl:col-span-1"
        />
        <div class="hidden xl:block"></div>
        <Project
            href="/projects/angular"
            title={translator.get("pages.home.projects.angular.title")}
            introduction={translator.get(
                "pages.home.projects.angular.introduction",
            )}
            class="sm:col-span-2"
        />
    </div>
</section>
