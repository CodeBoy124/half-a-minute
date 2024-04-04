<script>
	import Configure from '../components/Configure/Configure.svelte';
	import Game from '../components/game/Game.svelte';
	import TeamsList from '../components/TeamList/TeamsList.svelte';

	/** @type {'config' | 'team' | 'play'} */
	let mode = 'config';

	/** @type {string[]} */
	let teams = [];

	function goToTeamsSlide() {
		mode = 'team';
	}

	/** @param {CustomEvent<{teams: string[]}>} evt */
	function teamsReady(evt) {
		teams = evt.detail.teams;
		mode = 'play';
	}
</script>

<div
	class="bg-primary text-white fixed left-0 top-0 w-full h-full p-6 flex justify-center items-center"
>
	<div
		class="w-full h-full max-w-[650px] max-h-[550px] p-2 rounded-lg bg-card-dark flex flex-col justify-between"
	>
		{#if mode === 'config'}
			<Configure on:ready={goToTeamsSlide} />
		{:else if mode === 'team'}
			<TeamsList on:ready={teamsReady} />
		{:else}
			<Game {teams} />
		{/if}
	</div>
</div>
