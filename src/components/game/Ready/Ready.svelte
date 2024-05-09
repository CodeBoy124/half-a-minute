<script>
	// TODO: Improve page
	import { createEventDispatcher } from 'svelte';
	import { teamPointsStore } from '$lib/store';
	import Title from '../../Title/Title.svelte';
	import Button from '../../Button/Button.svelte';
	import Card from '../../Card/Card.svelte';

	/** @type {string} */
	export let currentTeam;
	/** @type {string[]} */
	export let teamNames;

	// When the user is ready dispatch an event
	const dispatch = createEventDispatcher();
	function imReady() {
		dispatch('ready');
	}

	function showScoring() {
		let scorePieces = [];

		for (let teamId = 0; teamId < teamNames.length; teamId++) {
			const hasExistingScore = $teamPointsStore.hasOwnProperty(teamId);
			scorePieces.push({
				team: teamNames[teamId],
				score: hasExistingScore ? $teamPointsStore[teamId] : 0
			});
		}

		return scorePieces;
	}
	$: scores = showScoring();

	// currentTeams includes a '&' or ' en '
	$: currentTeamIsPlural =
		currentTeam.includes('&') ||
		currentTeam.includes(' en ') ||
		currentTeam.includes('+') ||
		currentTeam.includes(' plus ');
</script>

<!-- A container div that will include the two cards -->
<div class="w-full h-full flex flex-col justify-between gap-6">
	<Card freescale fit>
		<Title>Stand van zaken</Title>
		<div class="w-full flex flex-col gap-3">
			{#each scores as score}
				<div class="flex justify-between items-center">
					<p>{score.team}</p>
					<p>{score.score} {score.score === 1 ? 'punt' : 'punten'}</p>
				</div>
			{/each}
		</div>
	</Card>
	<Card freescale>
		<Title>{currentTeam} {currentTeamIsPlural ? 'zijn' : 'is'} aan de beurt</Title>
		<Button on:click={imReady} full>Beginnen</Button>
	</Card>
</div>

<!-- Old single card version: -->
<!-- <div class="w-full h-full flex items-center justify-center flex-col gap-3">
	<Title>Jij bent, {currentTeam}</Title>
	<span>{scoringDisplay}</span>
	<Button on:click={imReady}>Ik ben er klaar voor!</Button>
</div> -->
