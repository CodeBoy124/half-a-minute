<script>
	import Game from '../components/game/Game.svelte';
	import TeamsList from '../components/teams/TeamsList.svelte';

	let teamsSetup = false;

	/** @type {string[]} */
	let teams = [];

	/** @param {CustomEvent<{teams: string[]}>} evt */
	function teamsReady(evt) {
		teams = evt.detail.teams;
		teamsSetup = true;
	}
</script>

<div class="app">
	<div class="container">
		{#if !teamsSetup}
			<TeamsList on:ready={teamsReady} />
		{:else}
			<Game {teams} />
		{/if}
	</div>
</div>

<style>
	.app {
		background-color: blueviolet;
		color: white;

		position: fixed;
		left: 0;
		top: 0;
		width: calc(100% - 50px);
		height: calc(100% - 50px);
		padding: 25px;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container {
		width: calc(100% - 30px);
		height: calc(100% - 30px);
		max-width: 650px;
		max-height: 550px;

		padding: 15px;

		border-radius: 15px;
		background-color: rgb(115, 35, 190);

		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
