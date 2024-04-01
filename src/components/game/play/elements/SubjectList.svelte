<script>
	import { subjectStore } from '$lib/store';
	import SubjectItem from './SubjectItem.svelte';

	/** @type {string[]} */
	let subjects = [];
	subjectStore.subscribe((newSubjects) => {
		subjects = newSubjects;
	});
</script>

<ul class=" list-none h-fit flex flex-col gap-4">
	{#each subjects as subject}
		<SubjectItem {subject} />
	{/each}
</ul>
