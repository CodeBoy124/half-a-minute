<script>
	// TODO: Improve page
	import { createEventDispatcher } from 'svelte';
	import { teamPointsStore } from '$lib/store';
	import Title from '../../Title/Title.svelte';
	import Button from '../../Button/Button.svelte';
	import Card from '../../Card/Card.svelte';
	import Scores from '../../Scores/Scores.svelte';
	import { isPlural } from '$lib/util';

	/** @type {string} */
	export let currentTeam;
	/** @type {string[]} */
	export let teamNames;

	// When the user is ready dispatch an event
	const dispatch = createEventDispatcher();
	function imReady() {
		dispatch('ready');
	}

	$: currentTeamIsPlural = isPlural(currentTeam);
</script>

<div class="h-full flex-1 w-full max-w-[650px] max-h-[650px] flex flex-col justify-between gap-6">
	<Card fit>
		<Title>Scores</Title>
		<Scores {teamNames} />
	</Card>
	<Card freescale>
		<Title>{currentTeam} {currentTeamIsPlural ? 'zijn' : 'is'} aan de beurt</Title>
		<Button on:click={imReady} full>Beginnen</Button>
	</Card>
</div>
