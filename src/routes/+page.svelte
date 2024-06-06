<script lang="ts">
    import PillHover from './pill-hover.svelte';
    import type { LayoutData } from './$types';
    import { createTranslator } from '$lib/i18n/i18n';

    type PageProps = {
        data: LayoutData;
    }

    let { data }: PageProps = $props();
    
    const translator = createTranslator(data.language);
</script>
<div class="bg-accent h-screen w-screen flex flex-col items-center justify-center gap-6 text-background text-[10rem]/[9rem] font-black">
    <div class="flex">
        <h1>Seppe</h1>
        <div class="min-w-[10.5rem]"></div>
    </div>
    <div class="flex gap-4">
        <div class="min-w-96 flex gap-2 justify-end items-center h-full">
            <PillHover backgroundColor="#BB3C3B"></PillHover>
            <PillHover backgroundColor="#B65453"></PillHover>
            <PillHover backgroundColor="#CB7877"></PillHover>
        </div>
        <h1>Meeus</h1>
    </div>
</div>
<p>{translator.get("welcome")}</p>