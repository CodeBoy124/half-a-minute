<script>
	import { subjectStore } from '$lib/store';
	import TickOffItem from './TickOffItem.svelte';

	/** @type {number} */
	export let teamId;

	// store the value of subjectStore into subjects
	/** @type {string[]} */
	let subjects = [];
	subjectStore.subscribe((newSubjects) => {
		subjects = newSubjects;
	});
</script>

<ul class="list-none h-fit flex flex-col gap-4">
	{#each subjects as subject}
		<TickOffItem {subject} {teamId} />
	{/each}
</ul>
