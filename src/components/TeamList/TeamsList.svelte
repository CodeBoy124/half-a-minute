<script>
	import { createEventDispatcher } from 'svelte';
	import { teamsStore } from '$lib/store';
	import TeamItem from './elements/TeamItem.svelte';
	import TeamActions from './elements/TeamActions.svelte';

	// Track teams
	/** @type {string[]} */ let teams = [];
	teamsStore.subscribe((newTeams) => {
		teams = newTeams;
	});

	// Dispatch event when the teams are setup
	let dispatch = createEventDispatcher();
	function teamsReady() {
		dispatch('ready', { teams });
	}
</script>

<div>
	<h2 class="text-2xl mb-3">Voeg teams toe...</h2>
	<ul class="list-none m-0 p-0 h-fit flex flex-col gap-2">
		{#each teams as team}
			<TeamItem {team} />
		{/each}
	</ul>
</div>

<TeamActions on:click={teamsReady} />
