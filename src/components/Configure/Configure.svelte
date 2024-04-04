<script>
	import { createEventDispatcher } from 'svelte';
	import { subjects } from '$lib/subjects';
	import { configStore } from '$lib/store';

	let selectedSubject = subjects.subjects[0];
	let time = 30;

	const dispatch = createEventDispatcher();
	function ready() {
		configStore.set({
			subjectType: selectedSubject,
			duration: time
		});
		dispatch('ready');
	}
</script>

<h1 class="text-2xl mb-3">Configuratie</h1>

<div class="w-full h-full flex flex-col justify-evenly items-center">
	<div class="flex flex-col items-center">
		<h2 class="text-xl mb-2">Onderwerpen</h2>
		<select
			bind:value={selectedSubject}
			class="transition-colors bg-primary active:bg-card rounded-md border-none outline-none text-white text-lg"
		>
			{#each subjects.subjects as subject, index}
				<option value={subject} selected={index === 0}>{subject}</option>
			{/each}
			<option value="All">Alles</option>
		</select>
	</div>

	<div class="flex flex-col items-center">
		<h2 class="text-xl mb-2">Tijd in sec.</h2>
		<input
			class="bg-primary rounded-md border-card p-2 text-white outline-none text-lg w-3/4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
			type="number"
			bind:value={time}
		/>
	</div>
</div>

<button
	class="transition-colors bg-primary active:bg-card p-2 rounded-md border-none outline-none text-white text-lg"
	on:click={ready}>Volgende</button
>
