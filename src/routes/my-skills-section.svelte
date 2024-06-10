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

    const gridItems: { [key: number]: GridItem } = $state({
        11: {
            image: svelteLogo,
            height: 18,
            width: 24,
        },
        13: {
            image: reactLogo,
        },
        22: {
            image: typescriptLogo,
        },
        23: {
            image: nextjsLogo,
        },
        31: {
            image: angularLogo,
        },
        56: {
            image: javaLogo,
        },
        57: {
            image: javaspringLogo,
        },
        67: {
            image: csharpLogo,
        },
        68: {
            image: csharpnetLogo,
        },
        83: {
            image: unrealLogo,
        },
        93: {
            image: blenderLogo,
        },
    });
    const gridItemsIndeces = $derived.by(() => {
        const keys = Object.keys(gridItems);

        return keys.map((el) => +el);
    });

    function getGridPositionContent(i: number) {
        if (gridItemsIndeces.includes(i)) {
            return gridItems[i];
        }
    }

    let moveableEl = $state<HTMLDivElement | null>(null);
    const moveableElBoundingClient = $derived(
        moveableEl?.getBoundingClientRect(),
    );

    function moveGridCircleEl(
        event: MouseEvent & {
            currentTarget: EventTarget & HTMLDivElement;
        },
    ) {
        if (!moveableEl) return;

        const currentTargetBoundingClient =
            event.currentTarget.getBoundingClientRect();

        moveableEl.style.left =
            (
                event.clientX -
                currentTargetBoundingClient.x -
                moveableElBoundingClient!.width / 2
            ).toString() + "px";
        moveableEl.style.top =
            (
                event.clientY -
                currentTargetBoundingClient.y -
                moveableElBoundingClient!.height / 2
            ).toString() + "px";
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
        class="relative mx-auto 2xl:ml-auto 2xl:mr-52 mt-5 md:w-4/5 xl:w-5/12 grid-lines overflow-clip"
    >
        <div
            onmousemove={moveGridCircleEl}
            class="grid grid-cols-10 grid-rows-10 gap-[1px] justify-items-center aspect-square"
        >
            {#each [...Array(100).keys()] as idx (idx)}
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
                            class="w-5 sm:w-auto"
                        />
                    {/if}
                </div>
            {/each}
        </div>
        <div
            bind:this={moveableEl}
            class="absolute w-40 h-40 rounded-full moveable-el pointer-events-none -z-10"
        ></div>
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

    .moveable-el {
        background: rgb(200, 60, 59);
        background: radial-gradient(
            circle,
            rgba(200, 60, 59, 0.7) 0%,
            rgba(200, 60, 59, 0) 100%
        );
    }
</style>
