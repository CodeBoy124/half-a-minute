<script>
	import { teamsStore } from '$lib/store';

	let value = '';

	function addTeam() {
		if (value === '') return;

		teamsStore.update((oldTeam) => [...oldTeam, value]);
		value = '';
	}
</script>

<div class="w-full flex justify-between gap-2">
	<input
		class="bg-primary rounded-md border-card p-2 text-white outline-none text-lg w-3/4"
		type="text"
		bind:value
		on:submit={addTeam}
	/>
	<button
		class="transition-colors bg-primary active:bg-card rounded-md border-none p-2 text-white text-lg"
		on:click={addTeam}>+</button
	>

	<button
		class="transition-colors bg-primary active:bg-card rounded-md border-none p-2 text-white text-lg"
		on:click>Ok</button
	>
</div>
