<script lang="ts">
    import svelteLogo from "$lib/images/logos/svelte.webp";
    import javaspringLogo from "$lib/images/logos/java_spring.webp";
    import Pill from "$lib/components/pill.svelte";
    import CalendarIcon from "$lib/icons/calendar-icon.svelte";
    import UsersIcon from "$lib/icons/users-icon.svelte";
    import homeImage from "$lib/images/projects/internship/home.webp";
    import homepageImage from "$lib/images/projects/project-4/home.webp";
    import dashboardImage from "$lib/images/projects/project-4/dashboard.webp";
    import chatImage from "$lib/images/projects/project-4/chat.webp";
    import type { LayoutData } from "../../$types";
    import { createTranslator } from "$lib/i18n/i18n";

    type ComponentProps = {
        data: LayoutData;
    };

    const { data }: ComponentProps = $props();

    const translator = createTranslator(data.language);
</script>

<div
    class="container flex flex-col lg:flex-row lg:mt-36 gap-16 mx-auto px-5 mt-10"
>
    <div class="max-w-96 flex flex-col justify-between">
        <div class="space-y-3">
            <h2 class="text-accent text-5xl font-black">
                {translator.get("pages.project-4.title")}
            </h2>
            <div class="flex gap-4 flex-wrap">
                <Pill>
                    <UsersIcon class="w-4" />
                    <p>{translator.get("pages.project-4.group-members")}</p>
                </Pill>
                <Pill>
                    <CalendarIcon class="w-4" />
                    <p>{translator.get("pages.project-4.date")}</p>
                </Pill>
            </div>
            <p>
                {translator.get("pages.project-4.description")}
            </p>
        </div>

        <a
            href="#intro"
            class="hidden lg:flex rounded-full justify-center items-center border border-primary-muted/30 py-4 border-dashed hover:bg-accent hover:text-background transition-colors"
            >{translator.get("buttons.read-more-below")}</a
        >
    </div>
    <div class="space-y-5">
        <div class="flex gap-16 px-10 lg:py-5 py-2">
            <div class="flex gap-4 items-center">
                <img src={svelteLogo} alt="Logo" width="20" height="20" />
                <p class="text-primary-muted/70 font-bold">SvelteKit</p>
            </div>
            <div class="flex gap-4 items-center">
                <img src={javaspringLogo} alt="Logo" width="22" height="20" />
                <p class="text-primary-muted/70 font-bold">Java Spring Boot</p>
            </div>
        </div>
        <div
            class="bg-primary-muted/15 rounded-3xl px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-4"
        >
            <img
                src={homepageImage}
                alt="challenge"
                class="rounded-xl col-span-2"
                title="challenge details"
            />
            <img
                src={chatImage}
                alt="profile"
                class="rounded-xl row-span-2"
                title="profile"
            />
            <img
                src={dashboardImage}
                alt="create challenge"
                class="rounded-xl col-span-2"
                title="creating a new challenge"
            />
        </div>
    </div>
</div>

<article
    id="intro"
    class="container flex flex-col lg:flex-row px-8 lg:px-20 mx-auto relative gap-4"
>
    <div class="space-y-12 lg:pt-32 order-2 lg:order-1">
        <section class="max-w-reading">
            <h3 class="text-accent text-3xl font-black">
                {translator.get("pages.project-4.section-1.title")}
            </h3>
            <p class="mt-3">
                {translator.get("pages.project-4.section-1.text")}
            </p>
        </section>
        <section class="max-w-reading">
            <h3 class="text-accent text-3xl font-black">
                {translator.get("pages.project-4.section-2.title")}
            </h3>
            <p class="mt-3">
                {translator.get("pages.project-4.section-2.text")}
            </p>
        </section>
    </div>

    <aside
        class="lg:sticky lg:top-0 order-1 lg:order-2 lg:pt-32 mt-10 mb-5 flex flex-col self-start mx-auto gap-2"
    >
        <div class="bg-primary-muted/10 py-2 px-4 rounded-xl">
            <h4 class="text-xl font-semibold text-accent">
                {translator.get("pages.project-4.cards.1.title")}
            </h4>
            <p>{translator.get("pages.project-4.cards.1.text")}</p>
        </div>
        <div class=" bg-primary-muted/10 py-2 px-4 rounded-xl">
            <h4 class="text-xl font-semibold text-accent">
                {translator.get("pages.project-4.cards.2.title")}
            </h4>
            <p>{translator.get("pages.project-4.cards.2.text-1")}</p>
            <p>{translator.get("pages.project-4.cards.2.text-2")}</p>
            <p>{translator.get("pages.project-4.cards.2.text-3")}</p>
            <p>{translator.get("pages.project-4.cards.2.text-4")}</p>
            <p>{translator.get("pages.project-4.cards.2.text-5")}</p>
        </div>
    </aside>
</article>
