<script lang="ts">
    import ArrowDownRightIcon from "$lib/icons/arrow-down-right-icon.svelte";
    import { twMerge } from "tailwind-merge";

    type ComponentProps = {
        title: string;
        introduction: string;
        class: string;
    };

    const { title, introduction, class: classname }: ComponentProps = $props();
</script>

<div
    class={twMerge(
        "border border-primary-muted/20 flex flex-col rounded-full justify-center items-center group hover:bg-accent transition-colors",
        classname,
    )}
>
    <h3 class="text-primary text-3xl group-hover:hidden transition text-center">
        {title}
    </h3>
    <p class="text-primary-muted group-hover:hidden max-w-[60%] text-center">
        {introduction}
    </p>
    <ArrowDownRightIcon
        class="hidden group-hover:block -rotate-90 text-background w-40 h-40"
    />
</div>
