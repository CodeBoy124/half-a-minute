<script>
	import { subjectStore } from '$lib/store';
	import TickOffItem from './TickOffItem.svelte';

	/** @type {number} */
	export let teamId;
</script>

<ul class="list-none h-fit w-full flex flex-col gap-4">
	{#each $subjectStore as subject}
		<TickOffItem {subject} {teamId} />
	{/each}
</ul>
