<script>
	import Game from '../components/game/Game.svelte';
	import TeamsList from '../components/TeamList/TeamsList.svelte';

	let teamsSetup = false;

	/** @type {string[]} */
	let teams = [];

	/** @param {CustomEvent<{teams: string[]}>} evt */
	function teamsReady(evt) {
		teams = evt.detail.teams;
		teamsSetup = true;
	}
</script>

<div
	class="bg-primary text-white fixed left-0 top-0 w-full h-full p-6 flex justify-center items-center"
>
	<div
		class="w-full h-full max-w-[650px] max-h-[550px] p-2 rounded-lg bg-card-dark flex flex-col justify-between"
	>
		{#if !teamsSetup}
			<TeamsList on:ready={teamsReady} />
		{:else}
			<Game {teams} />
		{/if}
	</div>
</div>
