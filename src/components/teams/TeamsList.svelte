<script>
	import { createEventDispatcher } from 'svelte';
	import { teamsStore } from '../../store';
	import AddTeam from './AddTeam.svelte';
	import TeamItem from './TeamItem.svelte';

	/** @type {string[]} */ let teams = [];
	teamsStore.subscribe((newTeams) => {
		teams = newTeams;
	});

	let dispatch = createEventDispatcher();
	function teamsReady() {
		dispatch('ready', { teams });
	}
</script>

<ul class="team-list">
	{#each teams as team}
		<TeamItem {team} />
	{/each}
</ul>

<div class="action-container">
	<AddTeam />
	<button class="ok" on:click={teamsReady}>Ok</button>
</div>

<style>
	.team-list {
		list-style: none;
		margin: 0;
		padding: 0;
		height: fit-content;

		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.ok {
		transition: background-color 0.2s;
		background-color: blueviolet;
		border-radius: 10px;
		border: none;
		padding: 10px;
		color: white;
		font-size: large;
	}
	.ok:active {
		background-color: rgb(167, 73, 255);
	}

	.action-container {
		width: 100%;
		display: flex;
		justify-content: space-between;
		gap: 10px;
	}
</style>
