<script lang="ts">
    import { createTranslator } from "$lib/i18n/i18n";
    import typescriptLogo from "$lib/images/logos/typescript.webp";
    import svelteLogo from "$lib/images/logos/svelte.webp";
    import reactLogo from "$lib/images/logos/react.webp";
    import nextjsLogo from "$lib/images/logos/nextjs.webp";
    import angularLogo from "$lib/images/logos/angular.webp";
    import javaLogo from "$lib/images/logos/java.webp";
    import javaspringLogo from "$lib/images/logos/java_spring.webp";
    import csharpLogo from "$lib/images/logos/csharp.webp";
    import csharpnetLogo from "$lib/images/logos/csharp_net.webp";
    import blenderLogo from "$lib/images/logos/blender.webp";
    import unrealLogo from "$lib/images/logos/unreal.webp";

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
        27: {
            image: nextjsLogo,
        },
        37: {
            image: angularLogo,
        },
        68: {
            image: javaLogo,
        },
        69: {
            image: javaspringLogo,
        },
        98: {
            image: csharpLogo,
        },
        99: {
            image: csharpnetLogo,
        },
        115: {
            image: unrealLogo,
        },
        127: {
            image: blenderLogo,
        },
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
    <p class="mt-3 max-w-reading text-justify">
        {translator.get("pages.home.introduction.technologies.description")}
    </p>
    <div
        class="grid grid-cols-12 grid-rows-12 grid-lines gap-[1px] justify-items-center mx-auto 2xl:ml-auto 2xl:mr-52 mt-5 lg:w-4/5 2xl:w-1/2"
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

<style>
    .grid-lines {
        background: rgb(200, 60, 59);
        background: radial-gradient(
            circle,
            rgba(200, 60, 59, 0.15) 20%,
            rgba(200, 60, 59, 0.025) 100%
        );
    }
</style>
