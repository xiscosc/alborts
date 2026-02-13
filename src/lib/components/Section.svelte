<script lang="ts">
	import type { Snippet } from 'svelte';

	let { id, title, children }: { id: string; title?: string; children: Snippet } = $props();
</script>

<section
	{id}
	class="min-h-svh flex flex-col items-center justify-center px-6 pt-[3vh] md:pt-2 bg-white"
>
	{#if title}
		<h2 class="text-5xl font-light font-nova text-center mb-8">{title}</h2>
	{/if}
	{@render children()}
</section>
