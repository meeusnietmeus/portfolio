<script lang="ts">
    import angularLogo from "$lib/images/logos/angular.webp";
    import csharpNetLogo from "$lib/images/logos/csharp_net.webp";
    import Pill from "$lib/components/pill.svelte";
    import CalendarIcon from "$lib/icons/calendar-icon.svelte";
    import UsersIcon from "$lib/icons/users-icon.svelte";
    import landingImage from "$lib/images/projects/angular/landing.webp";
    import tripImage from "$lib/images/projects/angular/trip.webp";
    import manageImage from "$lib/images/projects/angular/manage.webp";
    import winnerImage from "$lib/images/projects/angular/winner.webp";
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
                {translator.get("pages.angular.title")}
            </h2>
            <div class="flex gap-4 flex-wrap">
                <Pill>
                    <UsersIcon class="w-4" />
                    <p>{translator.get("pages.angular.group-members")}</p>
                </Pill>
                <Pill>
                    <CalendarIcon class="w-4" />
                    <p>{translator.get("pages.angular.date")}</p>
                </Pill>
            </div>
            <p>
                {translator.get("pages.angular.description")}
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
                <img src={angularLogo} alt="Logo" width="20" height="20" />
                <p class="text-primary-muted/70 font-bold">Angular</p>
            </div>
            <div class="flex gap-4 items-center">
                <img src={csharpNetLogo} alt="Logo" width="22" height="20" />
                <p class="text-primary-muted/70 font-bold">.NET</p>
            </div>
        </div>
        <div
            class="bg-primary-muted/15 rounded-3xl px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 place-items-center gap-4"
        >
            <img
                src={landingImage}
                alt="challenge"
                class="rounded-xl"
                title="challenge details"
            />
            <img
                src={tripImage}
                alt="profile"
                class="rounded-xl"
                title="profile"
            />
            <img
                src={manageImage}
                alt="create challenge"
                class="rounded-xl"
                title="creating a new challenge"
            />
            <img
                src={winnerImage}
                alt="create challenge"
                class="rounded-xl"
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
                {translator.get("pages.angular.section-1.title")}
            </h3>
            <p class="mt-3">
                {translator.get("pages.angular.section-1.text")}
            </p>
        </section>
        <section class="max-w-reading">
            <h3 class="text-accent text-3xl font-black">
                {translator.get("pages.angular.section-2.title")}
            </h3>
            <p class="mt-3">
                {translator.get("pages.angular.section-2.text")}
            </p>
        </section>
    </div>

    <aside
        class="lg:sticky lg:top-0 order-1 lg:order-2 lg:pt-32 mt-10 mb-5 flex flex-col self-start mx-auto gap-2"
    >
        <div class="bg-primary-muted/10 py-2 px-4 rounded-xl">
            <h4 class="text-xl font-semibold text-accent">
                {translator.get("pages.angular.cards.1.title")}
            </h4>
            <p>{translator.get("pages.angular.cards.1.text")}</p>
        </div>
        <div class=" bg-primary-muted/10 py-2 px-4 rounded-xl">
            <h4 class="text-xl font-semibold text-accent">
                {translator.get("pages.angular.cards.2.title")}
            </h4>
            <p>{translator.get("pages.angular.cards.2.text-1")}</p>
        </div>
    </aside>
</article>
