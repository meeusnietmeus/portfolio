<script lang="ts">
    import ArrowDownRightIcon from "$lib/icons/arrow-down-right-icon.svelte";
    import { twMerge } from "tailwind-merge";

    type ComponentProps = {
        href: string;
        title: string;
        introduction: string;
        class: string;
    };

    const {
        href,
        title,
        introduction,
        class: classname,
    }: ComponentProps = $props();
</script>

<a
    {href}
    class={twMerge(
        "border border-primary-muted/20 flex flex-col rounded-full justify-center items-center group relative hover:bg-accent transition-colors",
        classname,
    )}
>
    <h3 class="text-primary text-3xl group-hover:opacity-0 text-center">
        {title}
    </h3>
    <p class="text-primary-muted group-hover:opacity-0 max-w-[60%] text-center">
        {introduction}
    </p>
    <ArrowDownRightIcon
        class="opacity-0 group-hover:opacity-100 absolute top-1/2 -translate-y-1/2 -rotate-90 text-background w-28 h-28 lg:w-40 lg:h-40"
    />
</a>
