<script lang="ts">
    import type { LayoutData } from "./$types";
    import HeroSection from "./hero-section.svelte";
    import AboutMeSection from "./about-me-section.svelte";
    import MySkillsSection from "./my-skills-section.svelte";
    import ProjectsSection from "./projects-section.svelte";
    import Footer from "./footer.svelte";

    type PageProps = {
        data: LayoutData;
    };

    const { data }: PageProps = $props();
    const language = $derived(data.language);
</script>

<HeroSection {language} />
<div class="container px-8 lg:px-20 mx-auto space-y-28">
    <AboutMeSection {language} />
    <MySkillsSection {language} />
    <ProjectsSection {language} />
</div>
<Footer {language} />
