<script>
	import { subjectStore } from '$lib/store';
	import SubjectItem from './SubjectItem.svelte';
</script>

<ul class=" list-none h-fit flex flex-col gap-4">
	{#each $subjectStore as subject}
		<SubjectItem {subject} />
	{/each}
</ul>
