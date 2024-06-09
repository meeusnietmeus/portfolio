<script lang="ts">
    import ArrowCornerDownRight from "$lib/icons/arrow-corner-down-right.svelte";
    import { createTranslator } from "$lib/i18n/i18n";
    import typescriptLogo from "$lib/images/logos/typescript.webp";
    import svelteLogo from "$lib/images/logos/svelte.webp";
    import reactLogo from "$lib/images/logos/react.webp";
    import angularLogo from "$lib/images/logos/angular.webp";
    import SkillTreeEntry from "$lib/components/skill-tree-entry.svelte";
    import { text } from "@sveltejs/kit";

    type GridItem = {
        image: string;
        width?: number;
        height?: number;
    };

    type ComponentProps = {
        language: string;
    };
    const { language }: ComponentProps = $props();

    const translator = createTranslator(language);

    const gridItems: { [key: number]: GridItem } = {
        13: {
            image: svelteLogo,
            height: 18,
            width: 24,
        },
        15: {
            image: reactLogo,
        },
        26: {
            image: typescriptLogo,
        },
        // 27: {
        //     image: nextjsLogo
        // },
        // 38: {
        //     image: angularLogo
        // },
        // 68: {
        //     image: javaLogo
        // },
        // 69: {
        //     image: springbootLogo
        // },
        // 98: {
        //     image: csharpLogo
        // },
        // 99: {
        //     image: aspnetLogo
        // }
    };
    const gridItemsIndeces = Object.keys(gridItems);

    function getGridPositionContent(i: number) {
        if (gridItemsIndeces.includes(i.toString())) {
            return gridItems[i];
        }
    }
</script>

<section>
    <h2 class="text-accent text-5xl font-black">
        {translator.get("pages.home.skill-set.title")}
    </h2>
    <p class="mt-3">
        {translator.get("pages.home.introduction.technologies.description")}
    </p>
    <div
        class="grid grid-cols-12 grid-rows-12 lg:w-1/2 bg-accent/10 gap-[1px] justify-items-center mx-auto mt-5"
    >
        {#each [...Array(144).keys()] as idx (idx)}
            <div
                class="w-full h-full bg-background py-2 flex items-center justify-center"
            >
                {#if getGridPositionContent(idx)}
                    <img
                        src={getGridPositionContent(idx)?.image}
                        alt="Logo"
                        width={getGridPositionContent(idx)?.width}
                        height={getGridPositionContent(idx)?.width}
                        loading="lazy"
                    />
                {/if}
            </div>
        {/each}
    </div>
</section>

<!-- <img src={angularLogo} alt="Logo" width="24" height="24" /> -->
<style>
    .skill-cover {
        background: rgb(240, 230, 220);
        background: linear-gradient(
            180deg,
            rgba(240, 230, 220, 1) 5%,
            rgba(9, 9, 121, 0) 10%,
            rgba(6, 74, 164, 0) 95%,
            rgba(240, 230, 220, 1) 100%
        );
    }
</style>
