<script lang="ts">
    import svelteLogo from "$lib/images/logos/svelte.webp";
    import javaspringLogo from "$lib/images/logos/java_spring.webp";
    import Pill from "$lib/components/pill.svelte";
    import CalendarIcon from "$lib/icons/calendar-icon.svelte";
    import UsersIcon from "$lib/icons/users-icon.svelte";
    import homeImage from "$lib/images/projects/internship/home.webp";
    import challengeImage from "$lib/images/projects/internship/challenge.webp";
    import createChallengeImage from "$lib/images/projects/internship/create_challenge.webp";
    import profileImage from "$lib/images/projects/internship/profile.webp";
    import ArrowDownRightIcon from "$lib/icons/arrow-down-right-icon.svelte";
    import type { LayoutData } from "../../$types";
    import { createTranslator } from "$lib/i18n/i18n";
    import projectPlanPDF from "$lib/pfds/project_plan.pdf";
    import technicalPDF from "$lib/pfds/technical.pdf";
    import realizationsPDF from "$lib/pfds/realizations.pdf";
    import reflectionPDF from "$lib/pfds/reflectie.pdf";

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
                {translator.get("pages.internship.title")}
            </h2>
            <div class="flex gap-4">
                <Pill>
                    <UsersIcon class="w-4" />
                    <p>{translator.get("pages.internship.group-members")}</p>
                </Pill>
                <Pill>
                    <CalendarIcon class="w-4" />
                    <p>{translator.get("pages.internship.date")}</p>
                </Pill>
            </div>
            <p>
                {translator.get("pages.internship.description")}
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
            class="bg-primary-muted/15 rounded-3xl px-10 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-4"
        >
            <img src={homeImage} alt="home" class="rounded-xl" title="home" />
            <img
                src={challengeImage}
                alt="challenge"
                class="rounded-xl"
                title="challenge details"
            />
            <img
                src={createChallengeImage}
                alt="create challenge"
                class="rounded-xl"
                title="creating a new challenge"
            />
            <img
                src={profileImage}
                alt="profile"
                class="rounded-xl"
                title="profile"
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
                {translator.get("pages.internship.section-1.title")}
            </h3>
            <p class="mt-3">
                {translator.get("pages.internship.section-1.text")}
            </p>
        </section>
        <section class="max-w-reading">
            <h3 class="text-accent text-3xl font-black">
                {translator.get("pages.internship.section-2.title")}
            </h3>
            <p class="mt-3">
                {translator.get("pages.internship.section-2.text")}
            </p>
            <p class="mt-2">
                {translator.get("pages.internship.section-2.text-2")}
            </p>
        </section>
        <section class="max-w-reading">
            <h3 class="text-accent text-3xl font-black">
                {translator.get("pages.internship.section-3.title")}
            </h3>
            <p class="mt-3">
                {translator.get("pages.internship.section-3.text")}
            </p>
            <p class="mt-2">
                {translator.get("pages.internship.section-3.text-2")}
            </p>
        </section>
        <section class="max-w-reading">
            <h3 class="text-accent text-3xl font-black">
                {translator.get("pages.internship.section-4.title")}
            </h3>
            <p class="mt-3">
                {translator.get("pages.internship.section-4.text")}
            </p>
            <ul class="list-disc ml-5">
                <li>{translator.get("pages.internship.section-4.item-1")}</li>
                <li>{translator.get("pages.internship.section-4.item-2")}</li>
                <li>{translator.get("pages.internship.section-4.item-3")}</li>
                <li>{translator.get("pages.internship.section-4.item-4")}</li>
                <li>{translator.get("pages.internship.section-4.item-5")}</li>
                <li>{translator.get("pages.internship.section-4.item-6")}</li>
            </ul>
            <p class="mt-2">
                {translator.get("pages.internship.section-4.text-2")}
            </p>
        </section>

        <section class="max-w-reading">
            <h3 class="text-accent text-3xl font-black">
                {translator.get("pages.internship.section-5.title")}
            </h3>
            <p class="mt-3">
                {translator.get("pages.internship.section-5.text")}
            </p>
        </section>
    </div>

    <aside
        class="lg:sticky lg:top-0 order-1 lg:order-2 lg:pt-32 mt-10 mb-5 flex flex-col self-start mx-auto gap-2"
    >
        <div class="bg-primary-muted/10 py-2 px-4 rounded-xl">
            <h4 class="text-xl font-semibold text-accent">
                {translator.get("pages.internship.cards.1.title")}
            </h4>
            <p>{translator.get("pages.internship.cards.1.text")}</p>
        </div>
        <div class=" bg-primary-muted/10 py-2 px-4 rounded-xl">
            <h4 class="text-xl font-semibold text-accent">
                {translator.get("pages.internship.cards.2.title")}
            </h4>
            <p>{translator.get("pages.internship.cards.2.text-1")}</p>
            <p>{translator.get("pages.internship.cards.2.text-2")}</p>
        </div>
        <div class=" bg-primary-muted/10 py-2 px-4 rounded-xl">
            <h4 class="text-xl font-semibold text-accent">
                {translator.get("pages.internship.cards.3.title")}
            </h4>
            <a
                href="https://elicomp.vercel.app"
                target="_blank"
                class="hover:underline flex gap-1 items-center"
            >
                <span>{translator.get("pages.internship.cards.3.text")}</span>
                <ArrowDownRightIcon class="-rotate-90 w-4 text-accent" />
            </a>
        </div>
        <div class=" bg-primary-muted/10 py-2 px-4 rounded-xl flex flex-col">
            <h4 class="text-xl font-semibold text-accent">
                {translator.get("pages.internship.cards.4.title")}
            </h4>
            <a
                href={projectPlanPDF}
                target="_blank"
                class="hover:underline flex gap-1 items-center"
            >
                <span
                    >{translator.get(
                        "pages.internship.cards.4.project-plan",
                    )}</span
                >
                <ArrowDownRightIcon class="-rotate-90 w-4 text-accent" />
            </a>
            <a
                href={technicalPDF}
                target="_blank"
                class="hover:underline flex gap-1 items-center"
            >
                <span
                    >{translator.get(
                        "pages.internship.cards.4.technical",
                    )}</span
                >
                <ArrowDownRightIcon class="-rotate-90 w-4 text-accent" />
            </a>
            <a
                href={realizationsPDF}
                target="_blank"
                class="hover:underline flex gap-1 items-center"
            >
                <span
                    >{translator.get(
                        "pages.internship.cards.4.realizations",
                    )}</span
                >
                <ArrowDownRightIcon class="-rotate-90 w-4 text-accent" />
            </a>
            <a
                href={reflectionPDF}
                target="_blank"
                class="hover:underline flex gap-1 items-center"
            >
                <span
                    >{translator.get(
                        "pages.internship.cards.4.reflection",
                    )}</span
                >
                <ArrowDownRightIcon class="-rotate-90 w-4 text-accent" />
            </a>
        </div>
    </aside>
</article>
