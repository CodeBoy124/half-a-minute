<script>
	import { createEventDispatcher } from 'svelte';
	import { teamsStore } from '$lib/store';
	import TeamItem from './elements/TeamItem.svelte';
	import TeamActions from './elements/TeamActions.svelte';
	import Title from '../Title/Title.svelte';
	import Card from '../Card/Card.svelte';
	// Dispatch event when the teams are setup
	let dispatch = createEventDispatcher();
	function teamsReady() {
		if ($teamsStore.length > 0) dispatch('ready', { teams: $teamsStore });
	}
</script>

<Card>
	<div class="w-full">
		<Title>Teams</Title>
		<!-- <h2 class="text-2xl mb-3">Voeg teams toe...</h2> -->
		<ul class="list-none m-0 p-0 h-fit flex flex-col gap-2">
			{#each $teamsStore as team}
				<TeamItem {team} />
			{/each}
		</ul>
	</div>

	<TeamActions on:click={teamsReady} />
</Card>
